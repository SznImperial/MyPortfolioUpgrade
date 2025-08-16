import React, { useState } from "react";
import "./BlogList.css";

const blogPosts = [
    {
        id: 1,
        title: "Why I Chose Front-End Development",
        summary:
            "Front-end development allows me to visually bring ideas to life, experiment with interactive UIs, and combine creativity with programming...",
        fullText:
            "Front-end development allows me to visually bring ideas to life, experiment with interactive UIs, and combine creativity with programming logic. Seeing a design come alive in a browser is incredibly satisfying, and I love optimizing the user experience through responsive layouts, animations, and accessible design. Over the years, I've built portfolio websites, blogs, dashboards, and interactive apps, each project helping me understand the delicate balance between aesthetics and functionality. Front-end development constantly challenges me to stay updated with new frameworks, tools, and design patterns, keeping learning exciting and practical.",
        image: "/blog1.jpg",
    },
    {
        id: 2,
        title: "Java vs C#: Which One to Learn?",
        summary:
            "Choosing between Java and C# can be tricky, but understanding the strengths of both helps in making informed career decisions...",
        fullText:
            "Choosing between Java and C# can be tricky, but understanding the strengths of both helps in making informed career decisions. Java is widely used for Android apps, enterprise systems, and cross-platform solutions. C#, on the other hand, excels in Windows applications, game development with Unity, and modern web apps using ASP.NET. Learning both languages enhances versatility and helps solve problems across different platforms. Java’s strict object-oriented principles contrast with C#’s modern syntax and productivity features, making each language valuable in unique ways. Personally, I recommend starting with the language aligned to your career goal, then gradually exploring the other.",
        image: "/blog2.jpg",
    },
    {
        id: 3,
        title: "Top Programming Tricks I Learned",
        summary:
            "Some clever tricks make coding more efficient, like using array methods, understanding LINQ, and optimizing code for performance...",
        fullText:
            "Some clever tricks make coding more efficient, like using array methods in JavaScript such as `map`, `filter`, and `reduce`, or mastering LINQ in C# to handle complex data operations concisely. Strategic commenting, effective version control, and modular code structure enhance productivity. Learning to implement memoization in React or caching in backend APIs significantly improves performance. These techniques do not just speed up coding—they make programs easier to maintain and debug. Over time, I've realized that small tricks accumulate into major gains in workflow efficiency and code quality.",
        image: "/blog3.jpg",
    },
    {
        id: 4,
        title: "How I Manage Learning Multiple Languages",
        summary:
            "Learning Java, C#, Python, and Dart simultaneously was challenging, but with a consistent system, I managed to stay organized...",
        fullText:
            "Learning Java, C#, Python, and Dart simultaneously was challenging, but with a consistent system, I managed to stay organized. I dedicate specific days to each language, focusing on projects that reinforce concepts practically. Comparing similar patterns across languages deepens understanding and helps me quickly switch contexts. Documentation, coding challenges, and real-world projects play a crucial role in retaining knowledge. By balancing structured learning with experimentation, I’ve become versatile without feeling overwhelmed, which has enhanced both my skillset and confidence as a developer.",
        image: "/blog4.jpg",
    },
    {
        id: 5,
        title: "Building Interactive UIs",
        summary:
            "Interactive UIs make applications engaging. Using React, I create responsive components, smooth transitions, and intuitive user experiences...",
        fullText:
            "Interactive UIs make applications engaging. Using React, I create responsive components, smooth transitions, and intuitive user experiences. Animations and feedback cues enhance usability while maintaining performance ensures smooth interaction. Through experimentation, I’ve learned that simplicity often leads to better user engagement. Every project teaches me new ways to balance functionality with aesthetics, from managing complex state to designing appealing layouts. Building UIs is not just about coding—it’s about understanding how users think, interact, and enjoy the product.",
        image: "/blog5.jpg",
    },
    {
        id: 6,
        title: "Why Version Control Matters",
        summary:
            "Version control is essential for collaboration and solo projects, allowing me to track changes, experiment safely, and showcase progress...",
        fullText:
            "Version control is essential for collaboration and solo projects, allowing me to track every change, revert mistakes safely, and experiment without fear. Git workflows help me manage branches, test new features, and maintain stable main codebases. Hosting repositories on GitHub provides backups, transparency, and professional visibility. Over time, I’ve realized that mastering Git not only improves project stability but also boosts development efficiency. Proper version control transforms how I organize, plan, and execute projects, making it an indispensable skill for any developer.",
        image: "/blog6.jpg",
    },
];

const BlogList = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="blog-container">
            {blogPosts.map((post) => (
                <div key={post.id} className="blog-post">
                    <img src={post.image} alt={post.title} className="blog-image" />
                    <h2>{post.title}</h2>
                    <p>
                        {expandedId === post.id ? post.fullText : post.summary}
                        <button className="read-more" onClick={() => toggleReadMore(post.id)}>
                            {expandedId === post.id ? " Show Less" : " Read More"}
                        </button>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
