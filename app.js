// server.js

const express = require("express");
const path = require("path");
const connectToMongo = require("./database/db");

const app = express();

// Connect to MongoDB
connectToMongo();

// Middleware for JSON parsing
app.use(express.json({ limit: "50mb" }));

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routes
app.use("/api/auth", require("./router/auth"));
app.use("/api/products", require("./router/product_route"));

// Catch all route to serve the index.html for any other route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Backend server is up on port ${PORT}`);
});
