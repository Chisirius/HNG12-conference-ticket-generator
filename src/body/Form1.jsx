export default function Form1({
  nextButton,
  cancelButton,
  selectTicket,
  ticketNumber,
  ticketCount,
  setSelectedTicketInfo,
}) {
  const handleSelectTicket = (type, info) => {
    selectTicket(type);
    setSelectedTicketInfo(info);
  };
  return (
    <div id="step1">
      <div className="ticket-selection">
        <div className="step-process">
          <h2>Ticket Selection</h2>
          <span className="Steps">Step 1/3</span>
        </div>

        <div className="order">
          <div className="theme">
            <h1>Techember Fest &quot;25</h1>
            <h5>
              Join us for an unforgettable experience at <br />
              [Event Name]! Secure your spot now.
            </h5>
            <span>📍 [Event Location] </span> <span> || </span>
            <span> March 15, 2025 | 7:00 PM</span>
          </div>

          <hr />

          <div className="ticket-type">
            <h2>Select Ticket Type:</h2>
            <div className="ticket">
              <div
                className="free"
                onClick={() => handleSelectTicket("Free", "REGULAR")}
              >
                <h4>Free</h4>
                <p>REGULAR ACCESS</p>
                <p>20/52</p>
              </div>

              <div
                className="vip-access"
                onClick={() => handleSelectTicket("VIP", "VIP")}
              >
                <h4>$150</h4>
                <p>VIP ACCESS</p>
                <p>20/52</p>
              </div>

              <div
                className="vip-access"
                onClick={() => handleSelectTicket("VVIP", "VVIP")}
              >
                <h4>$250</h4>
                <p>VVIP ACCESS</p>
                <p>20/52</p>
              </div>
            </div>
          </div>

          <div className="ticket-no">
            <label htmlFor="number">Number of Tickets</label>
            <select
              id="number"
              // value={ticketCount}
              // onChange={ticketNumber}
              value={ticketCount}
              onChange={ticketNumber}
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="buttons">
            <button onClick={cancelButton}>Cancel</button>
            <button onClick={nextButton}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
