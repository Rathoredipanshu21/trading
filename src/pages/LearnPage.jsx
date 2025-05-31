import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const LearnPage = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/videos')
            .then(response => setVideos(response.data))
            .catch(error => console.error('Error fetching videos:', error));

        AOS.init({ duration: 1000 });
    }, []);

    // Function to show the modal with full description
    const handleShowModal = (video) => {
        setSelectedVideo(video);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setSelectedVideo(null);
    };

    return (

        <>      
          <div className="container mt-4">
            <div className="row">
                {videos.map((video) => {
                    const videoId = new URL(video.url).searchParams.get("v");
                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                    // Format Date
                    const formattedDate = new Date(video.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    });

                    // Show only first 10 words of description
                    const descriptionPreview = video.description.split(" ").slice(0, 10).join(" ") + "...";

                    return (
                        <div key={video.id} className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="card">
                                <img src={thumbnailUrl} className="card-img-top" alt={video.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{video.title}</h5>
                                    <p className="card-text">{descriptionPreview}</p>
                                    <p className="text-muted small">📅 {formattedDate}</p>
                                    <button className="btn btn-secondary me-2" onClick={() => handleShowModal(video)}>
                                        Read More
                                    </button>
                                    <a href={video.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Watch Video
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal for Full Description */}
            {selectedVideo && (
                <Modal show={true} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedVideo.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img 
                            src={`https://img.youtube.com/vi/${new URL(selectedVideo.url).searchParams.get("v")}/hqdefault.jpg`} 
                            alt={selectedVideo.title} 
                            className="img-fluid mb-3"
                        />
                        <p>{selectedVideo.description}</p>
                        <p className="text-muted small">📅 {new Date(selectedVideo.created_at).toDateString()}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <a href={selectedVideo.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Watch Video
                        </a>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
        </>

    );
};

export default LearnPage;
