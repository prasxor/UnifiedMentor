
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

if (
  !process.env.EMAIL_USER ||
  !process.env.EMAIL_PASS ||
  !process.env.EMAIL_RECEIVER
) {
  throw new Error(
    "Missing required environment variables. Check your .env file."
  );
}

const app = express();
app.use(cors());
app.use(express.json());

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

app.get("/api/github-contributions", async (req, res) => {
  const { username, year } = req.query;

  if (!username || !year) {
    return res.status(400).json({ error: "Username and year are required " });
  }

  const query = {
    query: `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `,
  };

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify(query),
    });

    const data = await response.json();

    if (data.errors) {
      return res
        .status(500)
        .json({
          error: "Failed to fetch GitHub contributions",
          details: data.errors,
        });
    }

    res.json(data.data.user.contributionsCollection);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error.message);
    res
      .status(500)
      .json({ error: "GitHub Contributions API is currently unavailable" });
  }
});

// 🔹 Route to handle Contact Us form submissions
app.post("/api/contact", async (req, res) => {
  const { fullName, email, message, reasons } = req.body;

  console.log("Received Data:", req.body); // Debugging log

  if (
    !fullName.trim() ||
    !email.trim() ||
    !message.trim() ||
    !Array.isArray(reasons) ||
    reasons.length === 0
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "📩 New Portfolio Message",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="color: #333;">📩 New Message Received</h2>
          <p><strong>👤 Name:</strong> ${fullName}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></p>
          <p><strong>📌 Reasons:</strong> ${reasons.join(", ")}</p>
          <p><strong>📝 Message:</strong></p>
          <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; color: #555;">${message}</blockquote>
          <br/>
          <p style="text-align: center; font-size: 12px; color: #777;">Sent from <strong>Your Portfolio</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

