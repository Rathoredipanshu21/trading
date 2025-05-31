import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogForm from "../BlogForm";
import BlogList from "../BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/blogs")
            .then(res => setBlogs(res.data))
            .catch(err => console.error("Error fetching blogs:", err));
    }, []);

    return (
        <div>
            <h1>Blog Writing Page</h1>
            <BlogForm setBlogs={setBlogs} />
            <BlogList blogs={blogs} />
        </div>
    );
};

export default Home;
