import React from "react";

const projects = [
    { title: "E-commerce App", description: "Full-stack app using React & Spring Boot", demo: "#", code: "#" },
    { title: "Portfolio Website", description: "My personal developer portfolio", demo: "#", code: "#" },
    { title: "Voting System", description: "C# voting system with GUI", demo: "#", code: "#" },
];

export default function Portfolio() {
    return (
        <section style={{ marginTop: "3rem" }}>
            <h2>&gt; Recent Projects</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ flex: "1 1 300px", padding: "1rem", border: "1px solid #00FF7F", borderRadius: "0.5rem" }}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: "#00FF7F" }}></a>
                            <a href="https://github.com/SznImperial" target="_blank" rel="noopener noreferrer" style={{ color: "#00FF7F" }}>View my Github Collection</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
