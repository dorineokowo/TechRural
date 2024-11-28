import dotenv from "dotenv"; // ES module import
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
import mailchimp from "@mailchimp/mailchimp_marketing";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mailchimp Configuration for Newsletter
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const listId = process.env.MAILCHIMP_LIST_ID;

// POST route to handle newsletter subscription
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
    });
    res
      .status(200)
      .json({ message: "Subscription successful!", data: response });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Subscription failed", error: error.response.text });
  }
});

// POST route to handle the contact form submission
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Make the request to Resend API
    const response = await axios.post(
      "https://api.resend.com/emails",
      {
        from: "onboarding@resend.dev", // Replace with your verified sender
        to: process.env.TO_EMAIL, // Recipient from .env
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`, // Use the API key from .env
          "Content-Type": "application/json",
        },
      }
    );

    // Send success response
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response?.data || error.message
    );
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
