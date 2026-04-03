require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const loadRoutes = require("./utils/loader");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Load APIs
const apiList = loadRoutes(app);

// API list route
app.get("/api-list", (req, res) => {
  res.json({
    status: true,
    total: apiList.length,
    apis: apiList
  });
});

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Health check (important for hosting)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: false,
    error: "Endpoint not found"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
