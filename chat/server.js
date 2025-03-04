const express = require('express');
const cors = require('cors');
const path = require("path");


const app = express();
const PORT = 5500;
const chatRoutes=require('./chatRoutes');


// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/bot',chatRoutes);
// Chatbot route
app.use(express.static(__dirname));

// Route to serve the chatbot UI
app.get("/aibot", (req, res) => {
    res.sendFile(path.join(__dirname, "aibot.html"));
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
console.log("Starting server...");