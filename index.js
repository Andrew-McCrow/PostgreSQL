const express = require("express");
const userRoutes = require("./routes/userRoutes");

// Create an Express app, set up middleware
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Use the user routes
app.use("/", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
