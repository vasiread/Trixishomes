const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

// POST route for contact form
app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,   // your gmail
                pass: process.env.PASSWORD // app password (not your normal password!)
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL}>`,
            to: "trixishome@gmail.com",
            subject: "New Contact Form Message",
            text: message,
            replyTo: email   
        });

        res.status(200).send("Message sent successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to send message.");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
