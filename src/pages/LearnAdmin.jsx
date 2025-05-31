import React, { useState } from 'react';
import axios from 'axios';

const LearnAdmin = () => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [textColor, setTextColor] = useState('#000000');
    const [isBold, setIsBold] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/add-video', { url, title, description });
            setMessage(response.data.message);
            setUrl('');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error saving video:', error);
            setMessage('Error adding video');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{ color: textColor, fontWeight: isBold ? 'bold' : 'normal' }}>Add Video</h2>
            <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" placeholder="YouTube URL" value={url} onChange={(e) => setUrl(e.target.value)} required style={{ padding: '8px', fontSize: '16px' }} />
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ padding: '8px', fontSize: '16px' }} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required style={{ padding: '8px', fontSize: '16px', height: '80px' }} />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Save Video</button>
            </form>
            {message && <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>}
            
            <div style={{ marginTop: '20px' }}>
                <label>Text Color: </label>
                <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} style={{ marginRight: '10px' }} />
                <button onClick={() => setIsBold(!isBold)} style={{ padding: '5px 10px', fontSize: '14px', cursor: 'pointer' }}>Toggle Bold</button>
            </div>
        </div>
    );
};

export default LearnAdmin;



  