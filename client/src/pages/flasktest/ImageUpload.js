import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [userId, setUserId] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file || !userId) {
            alert('Please provide a file and user ID.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('user_id', userId);

        try {
            const response = await axios.post('http://192.168.84.102:4000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert('File uploaded successfully');
        } catch (error) {
            console.error('There was an error uploading the file!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID: </label>
                <input type="text" value={userId} onChange={handleUserIdChange} required />
            </div>
            <div>
                <label>Upload PDF: </label>
                <input type="file" onChange={handleFileChange} accept="application/pdf" required />
            </div>
            <button type="submit">Upload</button>
        </form>
    );
}

export default ImageUpload;