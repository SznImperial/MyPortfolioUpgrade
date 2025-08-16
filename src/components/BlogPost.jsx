import React, { useState } from "react";

const BlogPost = ({ post }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div
            style={{
                backgroundColor: "#111",
                color: "#00FF7F",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                transition: "transform 0.2s",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
                />
            )}
            <h2 style={{ marginBottom: "0.5rem" }}>{post.title}</h2>
            <p>
                {readMore ? post.fullText : post.summary}{" "}
                <span
                    onClick={() => setReadMore(!readMore)}
                    style={{ color: "#FFD700", cursor: "pointer" }}
                >
          {readMore ? " Show Less" : " Read More"}
        </span>
            </p>
        </div>
    );
};

export default BlogPost;
