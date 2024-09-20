// import "./auth.css"; // Import the CSS for styling
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [selectedType, setSelectedType] = useState("");
  const [register, setregister] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSelection = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNext = () => {
    setregister(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("started");

    try {
      // Sign Up Request
      const response = await axios.post(
        "http://192.168.84.102:8000/api/auth/register",
        { username, email, password },
        {
          withCredentials: true, // Ensure cookies are sent
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Sign Up Success:", response.data);

      // Optionally handle post-signup actions
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="auth-container">
      {register === false ? (
        <>
          <div className="auth-box">
            <h1 className="auth-heading">Register As</h1>
            <label htmlFor="registerType" className="auth-label">
              Select Registration Type
            </label>
            <select
              id="registerType"
              className="auth-select"
              value={selectedType}
              onChange={handleSelection}
              required="required"
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>
            <button
              onClick={handleNext}
              disabled={!selectedType}
              className="auth-next-button"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="Register">
            {selectedType === "individual" && (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Register</button>
              </form>
            )}
            {selectedType === "organization" && <>hii</>}
          </div>
        </>
      )}
    </div>
  );
};

export default Register;
