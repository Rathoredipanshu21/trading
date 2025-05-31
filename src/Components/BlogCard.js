import React from "react";

const BlogCard = ({ blog }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img src={`http://localhost:5000/uploads/${blog.image}`} className="card-img-top" alt={blog.title} style={{ height: "200px", objectFit: "cover" }}/>
            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description.substring(0, 100)}...</p>
            </div>
        </div>
    );
};

export default BlogCard;
