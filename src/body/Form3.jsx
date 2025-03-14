export default function Form3({
  ticketCount,
  selectedTicketInfo,
  uploadedURL,
}) {
  return (
    <div id="step3">
      <div className="container">
        <div className="baby-container">
          <div className="confirm">
            <h2>Your Ticket is Booked!</h2>
            <p>
              Check your email for a copy or you can <strong>download</strong>
            </p>
          </div>

          <div className="grand-container">
            <div className="concave-box">
              <div className="concave-box2">
                <div className="theme2">
                  <h3>Techember Fest &quot;25</h3>
                  <p>📍 04 Rumens road, &apos;Ikoyi, Lagos</p>
                  <p>📅 March 15, 2025 | 7:00 PM</p>
                </div>

                <div className="image">
                  <img src={uploadedURL} alt="Profile Picture" />
                </div>

                <div className="user-info">
                  <div className="info1">
                    <div className="a">
                      <p className="data">Enter your name:</p>
                      <p className="info">
                        <strong>
                          {" "}
                          {document.getElementById("user-name").value}
                        </strong>
                      </p>
                    </div>

                    <div className="b">
                      <p className="data">Enter your email:</p>
                      <p className="info">
                        <strong>
                          {" "}
                          {document.getElementById("user-email").value}
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="info2">
                    <div className="a">
                      <p className="data">Ticket Type:</p>
                      <p className="info">
                        <strong>{selectedTicketInfo}</strong>
                      </p>
                    </div>

                    <div className="b">
                      <p className="data">Ticket for: </p>
                      <p className="info">
                        <strong>{ticketCount}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="special-request">
                    <p className="data">Special Request:</p>

                    <p className="info">
                      {document.getElementById("request").value}
                    </p>
                  </div>
                </div>
              </div>

              <div className="barcode">1 234567 891026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
