import { useState } from 'react';
import axios from 'axios';

const TradeForm = () => {
    const [formData, setFormData] = useState({ title: '', description: '', link: '', image: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('link', formData.link);
        data.append('image', formData.image);

        await axios.post('http://localhost:5000/api/upload', data);
        alert('Trade uploaded successfully. Please enter new details.');
        setFormData({ title: '', description: '', link: '', image: null });
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#f4f4f4',
            padding: '20px'
        }}>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '400px',
                background: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Upload Trade</h2>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value={formData.title}
                    onChange={handleChange} 
                    style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                />
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    value={formData.description}
                    onChange={handleChange} 
                    style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', resize: 'none', height: '80px' }}
                ></textarea>
                <input 
                    type="text" 
                    name="link" 
                    placeholder="Link" 
                    value={formData.link}
                    onChange={handleChange} 
                    style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                />
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    style={{ marginBottom: '15px' }}
                />
                <button type="submit" style={{
                    padding: '10px',
                    background: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}>Upload</button>
            </form>
        </div>
    );
};

export default TradeForm;
