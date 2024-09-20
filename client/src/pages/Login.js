import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Login({ setToken, setUserId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.84.102:8000/api/auth/login",
        { email, password }
      );

      const {
        token,
        data: { user_id },
      } = response.data;

      // Save token and userId in both state and localStorage
      setToken(token);
      setUserId(user_id);

      localStorage.setItem("token", token);
      localStorage.setItem("userId", user_id);

      console.log("Login Success:", user_id, response);

      // Redirect to the dashboard or home page
      navigate("/home");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>

      <section class="form_page">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="form_block">
                <div class="text_block">
                  <a href="/" class="educate_link_btn color-primary h6 mb-48"><i
                    class="far fa-chevron-left"></i> Back To Home</a>
                  <div class="title">
                    <img src="assets/media/shapes/mic-speaker.png" alt="" class="speaker_icon" />
                    <h2 class="mb-48">Login to an account</h2>
                  </div>


                  <div class="text-center">
                    <h6 class="mb-24">Sign in with your email address</h6>
                  </div>
                  <form onSubmit={handleSubmit} class="form-validator">
                    <div class="row">


                    </div>
                    <div class="mb-24">
                      <input type="email" class="form-control p_lg" id="login-email"
                        name="login-email" required placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-24">
                      <input type="password" class="form-control p_lg" id="login-password"
                        name="login-password" required placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" class="b-unstyle educate-btn w-100 mb-24"><span
                      class="educate-btn__curve"></span>Login Account</button>
                  </form>
                  <div class="text-end">
                    <h6>Don' have an account? <a href="/login" class="color-primary"> Register</a>
                    </h6>
                  </div>
                </div>
                <div class="shapes">
                  <img src="assets/media/shapes/vector-9.png" alt="" />
                  <img src="assets/media/shapes/vector-8.png" alt="" />
                  <img src="assets/media/shapes/circle-lines-3.png" alt="" />
                  <img src="assets/media/shapes/location.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
