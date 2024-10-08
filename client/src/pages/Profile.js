import React, { useState } from "react";
import axios from "axios";
import "./profile.css";
import Header from "../components/Header";

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
    formData.append("userId", userId); // Send userId with the file

    // Log the formData content (this won't work with a simple console.log(formData))
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      await axios.post(
        "http://192.168.84.102:8000/api/users/uploadFile", // Corrected URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Ensure token is passed if required
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

      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar">
        <Header />
        <br /><br />
        <br /><br />

        <div class="container-fluid">
          <div class="row profile">
            <div class="col-md-3">
              <div class="profile-sidebar">

                <div class="profile-userpic ">
                  <img src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="img-responsive" alt="" />
                </div>

                <div class="profile-usertitle">
                  <div class="profile-usertitle-name">
                    UserName
                  </div>
                  <div class="profile-usertitle-job">
                    Organisation
                  </div>
                </div>

                <div class="profile-userbuttons">

                  <button type="button" onClick={handleVerifyClick} class="btn btn-danger btn-sm">Verify Photo</button>
                </div>

                <br />



                <div class="portlet light bordered">

                  <div class="row list-separated profile-stat">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <div class="uppercase profile-stat-title"> 37 </div>
                      <div class="uppercase profile-stat-text"> Test Attempts </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <div class="uppercase profile-stat-title"> 6 </div>
                      <div class="uppercase profile-stat-text"> Test Marked </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>
            <div class="col-md-9">
              <div class="profile-content">
                Some user related content goes here...
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={handleVerifyClick}>Verify Yourself</button> */}

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
    </div>
  );
}

export default Profile;
