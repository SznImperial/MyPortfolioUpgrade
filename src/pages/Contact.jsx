import React, { useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_lq1k0nq",
                "template_doz1e94",
                e.target,
                "SWAIDwgTLJUzWbUsv"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSubmitted(true);
                },
                (error) => {
                    console.log(error.text);
                    alert("Message failed to send.");
                }
            );

        e.target.reset();
    };

    return (
        <div
            style={{
                fontFamily: "monospace",
                color: "#00FF7F",
                backgroundColor: "#111",
                minHeight: "100vh",
                width: "100%",
                boxSizing: "border-box",
                padding: "3rem 1rem",
            }}
        >
            <h1
                style={{
                    fontSize: "2rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                }}
            >
                &gt; Contact Me
            </h1>

            {/* Contact Info */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "600px",
                    width: "90%",
                    margin: "0 auto 2rem",
                    gap: "1rem",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>📧</span>
                    <span>adetolaabdulkareemayomide@gmail.com</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>📞</span>
                    <span>+2347072495804</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>📍</span>
                    <span>68, Bola Street, Lagos Mainland, Lagos</span>
                </div>
            </div>

            {/* Contact Form */}
            <form
                onSubmit={sendEmail}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "600px",
                    width: "90%",
                    margin: "0 auto",
                    gap: "1rem",
                }}
            >
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    style={{
                        padding: "0.5rem",
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "1px solid #00FF7F",
                        borderRadius: "5px",
                    }}
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    style={{
                        padding: "0.5rem",
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "1px solid #00FF7F",
                        borderRadius: "5px",
                    }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="6"
                    style={{
                        padding: "0.5rem",
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "1px solid #00FF7F",
                        borderRadius: "5px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "0.7rem",
                        backgroundColor: "#00FF7F",
                        color: "#111",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "0.3s",
                    }}
                >
                    Send Message
                </button>
                {submitted && (
                    <span style={{ color: "#00FF7F", textAlign: "center" }}>
            Message sent successfully!
          </span>
                )}
            </form>
        </div>
    );
};

export default Contact;
