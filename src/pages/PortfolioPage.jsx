import React from "react";


const projects = [
    {
        title: "Portfolio Website",
        description: "My personal developer portfolio showcasing my skills and projects.",
        demo: "https://sznimperial.github.io/MYPORTFOLIO/",
        code: "https://github.com/SznImperial/MYPORTFOLIO",
    },
    {
        title: "Netflix UI Clone",
        description: "A responsive Netflix user interface clone built with React.",
        demo: "https://sznimperial.github.io/Netflix-UI-CLONE/",
        code: "https://github.com/SznImperial/Netflix-UI-CLONE",
    },
    {
        title: "Homestyler",
        description: "A home design app interface built with React and modern UI techniques.",
        demo: "https://sznimperial.github.io/HomeStyler/",
        code: "https://github.com/SznImperial/HomeStyler.git",
    },
    {
        title: "Chic-lighting",
        description: "An e-commerce lighting website UI built using React.",
        demo: "https://sznimperial.github.io/ChicLighting/",
        code: "https://github.com/SznImperial/Chic-Lighting1",
    },
    {
        title: "PayPal Integration App",
        description: "Demo app integrating PayPal payments for e-commerce applications.",
        demo: "#",
        code: "https://github.com/SznImperial/paypal-integration-class",
    },
];

const services = [
    "Web Development (Frontend & Backend)",
    "UI/UX Design",
    "Responsive & Mobile-First Design",
    "API Integration & Full-Stack Solutions",
];

const hobbies = ["Reading", "Gaming", "Music", "Traveling"];

const PortfolioPage = () => {
    return (
        <div style={{ paddingTop: "6rem", fontFamily: "monospace", backgroundColor: "#000", color: "#00FF7F" }}>

            {/* Formal Introduction */}
            <section style={{ marginBottom: "3rem" }}>
                <h1>&gt; Hello, I'm Adetola Abdulkareem Ayomide</h1>
                <p>
                    I am a passionate Full-Stack Developer skilled in Java, Python, React, Spring Boot, and more.
                    I build modern and responsive web applications with a techy, clean style.
                </p>
                {/* CV Download */}
                <a
                    href="/Adetola Abdulkareem CV.pdf"
                    download
                    style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", border: "1px solid #00FF7F", borderRadius: "0.3rem", color: "#00FF7F", textDecoration: "none" }}
                >
                    Download CV
                </a>
            </section>

            {/* Recent Projects */}
            <section style={{ marginBottom: "3rem" }}>
                <h2>&gt; Recent Projects</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{ flex: "1 1 300px", padding: "1rem", border: "1px solid #00FF7F", borderRadius: "0.5rem" }}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: "#00FF7F" }}>Live Demo</a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer" style={{ color: "#00FF7F" }}>View Code</a>
                            </div>
                        </div>
                    ))}
                </div>
                <p style={{ marginTop: "1rem" }}>Check my GitHub for more projects in their respective repositories.
                A lot of backend projects are been sent there including my day in day out works</p>
            </section>

            {/* Services Offered */}
            <section style={{ marginBottom: "3rem" }}>
                <h2>&gt; Services I Offer</h2>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </section>

            {/* Hobbies */}
            <section style={{ marginBottom: "3rem" }}>
                <h2>&gt; Hobbies</h2>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </section>


        </div>
    );
};

export default PortfolioPage;
