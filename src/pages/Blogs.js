import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../Components/BlogCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Confetti from "react-confetti";
import { FaHeart, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [likedBlogs, setLikedBlogs] = useState({});
    const [fakeLikes, setFakeLikes] = useState({});
    const [fakeViews, setFakeViews] = useState({});
    
    useEffect(() => {
        axios.get("http://localhost:5000/blogs")
            .then((res) => {
                setBlogs(res.data);
                const initialLikes = {};
                const initialViews = {};
                res.data.forEach(blog => {
                    initialLikes[blog.id] = 93;
                    initialViews[blog.id] = Math.floor(Math.random() * 500) + 1000;
                });
                setFakeLikes(initialLikes);
                setFakeViews(initialViews);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleShowModal = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true);
        setFakeViews(prev => ({ ...prev, [blog.id]: prev[blog.id] + 1 }));
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBlog(null);
    };

    const handleLike = (id) => {
        setLikedBlogs(prev => ({ ...prev, [id]: !prev[id] }));
        setFakeLikes(prev => ({ ...prev, [id]: prev[id] + (likedBlogs[id] ? -1 : 1) }));
    };

    return (
        <>
        <div className="hero-section">
        <img src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Financial or Insurance" />
        <div className="hero-content">
          <h1>Financial and Insurance Insights</h1>
          <p>Stay updated with the latest trends and insights in the financial and insurance sectors.</p>
        </div>
      </div>
            <h2 className="text-center mb-4 pt-10" style={{ fontFamily: "gillory", fontWeight: "bold" }}>Blog Posts</h2>
            <div className="container mt-4">
                <div className="row">
                    {blogs.map((blog) => (
                        <div 
                            className="col-md-4 mb-4" 
                            key={blog.id}
                        >
                            <div 
                                className="blog-card" 
                                onClick={() => handleShowModal(blog)} 
                                style={{ cursor: "pointer" }} 
                                data-aos="zoom-in"
                            >
                                <BlogCard blog={blog} />
                            </div>
                            <div className="d-flex flex-column justify-content-between align-items-start mt-2 likes-views-container">
                                <motion.button 
                                    className={`like-button ${likedBlogs[blog.id] ? 'liked' : ''}`} 
                                    onClick={(e) => { e.stopPropagation(); handleLike(blog.id); }}
                                    style={{ backgroundColor: likedBlogs[blog.id] ? "red" : "gray", border: "none", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
                                    <FaHeart /> {fakeLikes[blog.id]} Likes
                                </motion.button>
                                <div className="views" style={{ fontSize: "14px", fontWeight: "normal", color: "#555" }}>
                                    <FaEye style={{ marginRight: "5px", color: "#555" }} /> {fakeViews[blog.id]} Views
                                </div>
                            </div>
                            {likedBlogs[blog.id] && <Confetti numberOfPieces={200} recycle={false} />} 
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Box */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>{selectedBlog?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    {selectedBlog?.image && (
                        <img src={selectedBlog.image} alt={selectedBlog.title} className="img-fluid mb-3" />
                    )}
                    <h4 style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>{selectedBlog?.title}</h4>
                    <p style={{ fontSize: "5px", color: "#444" }}>{selectedBlog?.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>

            <style jsx>{`
                .like-button {
                    font-size: 14px;
                    padding: 8px 16px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }
                .like-button.liked {
                    animation: pop 0.5s ease;
                    background-color: green !important;
                    color: white !important;
                }
                @keyframes pop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                .blog-card {
                    border: 2px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                .blog-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
                }
                .views {
                    font-size: 14px;
                    font-weight: normal;
                    color: #555;
                }
                .likes-views-container {
                    display: flex;
                  
                    align-items: flex-start; /* Align to the left */
                    margin-top: 10px;
                    padding: 5px 0;
                }
            `}</style>


        </>
    );
};

export default Blogs;
