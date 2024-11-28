import React, { useState } from "react";
import "./Donate.css"; // Import the CSS for styling

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your donation of $${donationAmount}!\nMessage: ${message}`
    );
    // Reset fields after submission
    setDonationAmount("");
    setMessage("");
  };

  return (
    <div className="donate-page">
      <h1>Support Our Mission</h1>
      <p>
        Your contributions help us empower rural youths with digital skills and
        resources.
      </p>

      <button type="submit" className="donate-btn">
        Donate Now
      </button>

      <div className="donation-info">
        <h2>How Your Donation Helps</h2>
        <ul>
          <li>Provides digital skills training for youths.</li>
          <li>Ensures access to the internet and technology.</li>
          <li>Supports community development projects.</li>
        </ul>
      </div>
    </div>
  );
};

export default Donate;
