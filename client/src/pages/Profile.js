import React, { useState } from "react";
import axios from "axios";
import "./profile.css";

function Profile({ token, userId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleVerifyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setPreviewImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Function to handle image upload
  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    // Log the formData content (this won't work with a simple console.log(formData))
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      console.log("in Profile ", userId, formData);

      await axios.post(
        "http://192.168.84.102:8000/api/users/uploadImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Assuming you use token for authentication
          },
          withCredentials: true,
        }
      );
      alert("Image uploaded successfully!");
      handleCloseModal(); // Close the modal on successful upload
    } catch (error) {
      console.error("Error uploading the image", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <div>
      <button onClick={handleVerifyClick}>Verify Yourself</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Upload Your Image</h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ margin: "10px 0" }}
            />

            {previewImage && (
              <div>
                <img
                  src={previewImage}
                  alt="Selected"
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}

            <div style={{ marginTop: "20px" }}>
              <button onClick={handleUpload} style={{ marginRight: "10px" }}>
                Upload
              </button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
