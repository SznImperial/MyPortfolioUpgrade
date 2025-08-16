import React from "react";

const skills = [
    { name: "Java", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Spring Boot", level: "Intermediate" },
    { name: "C#", level: "Intermediate" },
];

export default function Skills() {
    return (
        <section style={{ padding: "4rem 0" }}>
            <h2>&gt; My Skills</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
                {skills.map((skill, index) => (
                    <div key={index} style={{ padding: "1rem", border: "1px solid #00FF7F", borderRadius: "0.5rem", textAlign: "center" }}>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
