const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middlewares/authMiddleware");
const cors = require("cors"); // Import the CORS package

const app = express();
app.use(
  cors({
    origin: true, // Allow all origins temporarily for testing
    credentials: true, // Allow cookies to be sent
  })
);

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Testing Branch Works fine");
});

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
