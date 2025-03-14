import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Form2({
  getTicket,
  backButton,
  uploadedURL,
  setUploadedURL,
}) {
  const [dataURL, setDataURL] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading failed");
      reader.onload = () => {
        // const binaryStr = reader.result;
        setDataURL(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, acceptedFiles, getInputProps, isDragActive } =
    useDropzone({ onDrop });

  const selectedFile = acceptedFiles[0];

  const uploadImage = async () => {
    let formData = new FormData();

    formData.append("file", selectedFile);
    formData.append("upload_preset", "mi_default");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dqzdmoid8/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Cloudinary response:", data);
      if (data.secure_url) {
        setUploadedURL(data.secure_url); // Use Cloudinary's secure URL
        setDataURL(data.secure_url); // Update preview to Cloudinary URL
      } else {
        alert("Upload failed, please try again.");
        setUploadedURL(false);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  return (
    <div id="step2">
      <div className="attendee-details">
        <div className="step-process">
          <h2>Attendee Details</h2>
          <span className="Steps">Step 2/3</span>
        </div>

        <div className="order">
          <div className="upload">
            <p>Upload Profile Photo</p>

            <div className="image-layer">
              <div className="upload-box">
                <div className="zone">
                  {dataURL ? (
                    <div className="selected">
                      <img src={dataURL} alt="Profile Preview" />
                      <div className="actions">
                        {uploadedURL ? (
                          <p className="uploaded-txt">Uploading!</p>
                        ) : (
                          <button onClick={uploadImage} className="upload-btn">
                            Upload
                          </button>
                        )}
                        <button
                          onClick={() => {
                            setDataURL(null);
                            setUploadedURL(null);
                          }}
                          className="cancel-btn"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="drop-zone" {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <div className="drop-files">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="50"
                            width="50"
                            fill="currentColor"
                          >
                            <path d="M1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811L7 21C3.64378 20.7257 1 17.9216 1 14.5ZM16.8483 18.9868C19.1817 18.8093 21 16.8561 21 14.5C21 12.927 20.1884 11.4962 18.8771 10.6781L18.0714 10.1754L17.9517 9.23338C17.5735 6.25803 15.0288 4 12 4C8.97116 4 6.42647 6.25803 6.0483 9.23338L5.92856 10.1754L5.12288 10.6781C3.81156 11.4962 3 12.927 3 14.5C3 16.8561 4.81833 18.8093 7.1517 18.9868L7.325 19H16.675L16.8483 18.9868ZM13 13V17H11V13H8L12 8L16 13H13Z"></path>
                          </svg>
                        </div>
                      ) : (
                        <div className="drag-files">
                          Drop your files here or click to browse
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {uploadedURL && (
                  <a target="_blank" href={uploadedURL}>
                    <span className="uploaded-url">{uploadedURL}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <hr />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!uploadedURL) {
                alert("Please upload an image before proceeding.");
                return;
              }
              getTicket();
            }}
          >
            <div className="ticket-no">
              <label htmlFor="user-name">Enter your name</label>
              <input type="text" id="user-name" name="user-name" required />
            </div>

            <div className="ticket-no">
              <label htmlFor="user-email">Enter your email</label>
              <input
                type="email"
                id="user-email"
                name="user-email"
                placeholder="hello@avioflagos.io"
                required
              />
            </div>

            <div className="ticket-no">
              <label htmlFor="request">Special request?</label>
              <textarea
                id="request"
                name="request"
                rows="3"
                placeholder="textarea"
              ></textarea>
            </div>

            <div className="buttons">
              <button
                type="button"
                className="back"
                onClick={() => backButton()}
              >
                Back
              </button>
              <button type="submit" className="get-ticket">
                Get My Free Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
