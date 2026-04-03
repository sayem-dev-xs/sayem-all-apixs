require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const loadRoutes = require("./utils/loader");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

// load routes
const apiList = loadRoutes(app);

// api list
app.get("/api-list", (req, res) => {
  res.json({
    status: true,
    total: apiList.length,
    apis: apiList
  });
});

// home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// health
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
