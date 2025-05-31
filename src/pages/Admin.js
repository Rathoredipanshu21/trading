import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
    const [blog, setBlog] = useState({ title: "", description: "", image: null });

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setBlog({ ...blog, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", blog.title);
        formData.append("description", blog.description);
        formData.append("image", blog.image);

        try {
            await axios.post("http://localhost:5000/blogs/add", formData);
            alert("Blog Added Successfully");
            setBlog({ title: "", description: "", image: null });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
            <h2>Add a Blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={blog.title} onChange={handleChange} required className="form-control my-2"/>
                <textarea name="description" placeholder="Description" value={blog.description} onChange={handleChange} required className="form-control my-2"/>
                <input type="file" onChange={handleImageChange} className="form-control my-2"/>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
};

export default Admin;
