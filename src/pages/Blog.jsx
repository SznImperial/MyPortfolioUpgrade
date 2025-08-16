import React from "react";
import BlogList from "../components/BlogList.jsx";


const Blog = () => {
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
                    fontSize: "2.5rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                }}
            >
                &gt; My Blog
            </h1>

            <BlogList />


        </div>
    );
};

export default Blog;
