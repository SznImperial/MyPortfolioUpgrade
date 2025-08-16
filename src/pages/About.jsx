import React from "react";
import Footer from "../components/Footer.jsx";

const About = () => {
    return (
        <div style={{ paddingTop: "6rem", paddingBottom: "3rem", fontFamily: "monospace", color: "#00FF7F" }}>
            <h1>&gt; About Me</h1>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Bio</h2>
                <p>
                    I'm Adetola Abdulkareem Ayomide, a Full-Stack Developer passionate about building modern and responsive web applications.
                    I enjoy learning new technologies and creating projects that challenge my skills.
                    And I am a proud Student Of Aptech Learning Centre, Surulere Centre.
                    Am still studying further but am willed up to some extent to do some certain thing.
                    Am also actively looking for internships.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Fun Facts & Interests</h2>
                <ul>
                    <li>TV Shows: Crime series, Tech documentaries</li>
                    <li>Movies: Sci-fi & Action</li>
                    <li>Sports: Football fan</li>
                    <li>Free time: Gaming, playing football, coding side projects</li>
                    <li>Tech companies I admire: Innovative startups and creative tech companies</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Goals & Aspirations</h2>
                <p>
                    My goal is to become a leading full-stack developer, contribute to impactful tech solutions,
                    and work with companies that prioritize innovation and creativity.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Skills & Strengths</h2>
                <ul>
                    <li>Programming: Java, Python, React, Spring Boot, C#</li>
                    <li>Soft skills: Problem-solving, teamwork, attention to detail</li>
                    <li>UI/UX design, Responsive & Mobile-first design</li>
                </ul>
            </section>


        </div>
    );
};

export default About;
