const CLIENT_ID = "896862720605-8kfdfk7qjg6pe4n96tutf2jgr6djkvbb.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/gmail.send";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

function initClient() {
    gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: DISCOVERY_DOCS
    }).then(() => {
        console.log("Gmail API client loaded");
    });
}

function authenticate() {
    return gapi.auth2.getAuthInstance().signIn()
        .then(() => console.log("Sign-in successful"))
        .catch(err => console.error("Error signing in", err));
}

function sendEmail(formData) {
    const body = `
Name: ${formData.get("name")}
Preferred Contact: ${formData.get("contact")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Budget (AED): ${formData.get("budget")}
Message: ${formData.get("message") || "N/A"}
    `;

    const email = [
        "To: vasiraja14122000@gmail.com", // Change to your receiving email
        "Subject: New 'Book a Call' Request",
        "",
        body
    ].join("\n");

    const encodedEmail = btoa(email)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

    return gapi.client.gmail.users.messages.send({
        userId: "me",
        resource: { raw: encodedEmail }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    gapi.load("client:auth2", initClient);

    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        try {
            await authenticate();
            await sendEmail(formData);
            document.getElementById("formNote").innerText = "✅ Your request has been sent!";
            this.reset();
        } catch (err) {
            console.error(err);
            document.getElementById("formNote").innerText = "❌ Failed to send. Please try again.";
        }
    });
});