const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectToMongo = require("./database/db");
const path = require("path");

const app = express();

// Connect to MongoDB
connectToMongo();

// Define port
const appPort = process.env.PORT || 2000;

// Middleware for JSON parsing
app.use(express.json({ limit: "50mb" }));

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, 'client', 'build v2')));

// Routes
app.use("/api/auth", require("./router/auth"));
app.use("/api/products", require("./router/product_route"));

// Catch all route to serve the index.html for any other route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build v2', 'index.html'));
});

// Start the server
const server = app.listen(appPort, () => {
  console.log(`Backend server is up on port ${appPort}`);
});

// Error handling
process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.stack}`);
  server.close(() => process.exit(1));
});

// Handle other unexpected errors
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Recommended: log the error and close the server gracefully
});
