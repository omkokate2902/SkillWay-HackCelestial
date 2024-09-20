import "./page.css"; // Import the CSS for styling
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
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

    try {
      // Sign Up Request
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          password,
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
                  <label className="block text-white text-lg mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 text-white border border-white rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 text-white border border-white rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 text-white border border-white rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded shadow-lg hover:bg-green-700 transition duration-300"
                >
                  Register
                </button>
              </form>
            )}
            {selectedType === "organization" && <>hii</>}
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
