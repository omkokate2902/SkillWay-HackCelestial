import React, { useState } from "react";
import "./page.css"; // Import the CSS for styling

const Auth = () => {
  const [selectedType, setSelectedType] = useState("");
  const [register, setregister] = useState("false");

  const handleSelection = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNext = () => {
    setregister(true);
  };

  return (
    <div className="auth-container">
      {register(false) ? (
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
            {selectedType === "indivisual" && <></>}
            {selectedType === "organization" && <></>}
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
