import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/blogs/${id}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
        </div>
    );
};

export default BlogDetails;
