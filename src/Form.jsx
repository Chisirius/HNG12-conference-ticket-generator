import { useState } from "react";
import Form1 from "./body/Form1";
import Form2 from "./body/Form2";
import Form3 from "./body/Form3";
import Header from "./Header";

export default function Form() {
  const [step, setStep] = useState(1);
  const [selectTicket, setSelectTicket] = useState("");
  const [ticketCount, setTicketCount] = useState(1);

  const nextButton = () => {
    if (!selectTicket) {
      alert("Please select a ticket type before proceeding");
      return;
    }
    setStep((step) => step + 1);
  };

  const cancelButton = () => {
    setStep(1);
    setSelectTicket("");
    setTicketCount(1);
  };

  const selectTicketHandler = (ticketType) => setSelectTicket(ticketType);
  const ticketNumber = (e) => setTicketCount(Number(e.target.value));
  const backButton = () => setStep((curStep) => curStep - 1);
  const getTicket = () => setStep((curStep) => curStep + 1);

  const [selectedTicketInfo, setSelectedTicketInfo] = useState("");

  const [uploadedURL, setUploadedURL] = useState(null);

  function GetForm() {
    const forms = [
      <Form1
        nextButton={nextButton}
        cancelButton={cancelButton}
        selectTicket={selectTicketHandler}
        ticketNumber={ticketNumber}
        ticketCount={ticketCount}
        setSelectedTicketInfo={setSelectedTicketInfo}
        key={1}
      />,
      <Form2
        backButton={backButton}
        getTicket={getTicket}
        uploadedURL={uploadedURL}
        setUploadedURL={setUploadedURL}
        key={2}
      />,
      <Form3
        nextButton={nextButton}
        selectTicket={selectTicketHandler}
        ticketNumber={ticketNumber}
        ticketCount={ticketCount}
        selectedTicketInfo={selectedTicketInfo}
        uploadedURL={uploadedURL}
        setUploadedURL={setUploadedURL}
        key={3}
      />,
    ];

    return forms[step - 1];
  }

  return (
    <div>
      <Header />
      <GetForm />
    </div>
  );
}
