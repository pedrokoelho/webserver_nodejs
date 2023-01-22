// 03

// Import Express
const  express = require('express');

// Import path
const path = require('path')

// Initialize a variable with Express
const app = express();

// Create a Router
app.get('/', (req, res) => {
    // this works but it's not ideal
    // because we needed to create a route for each page
    // better to create a static folder
    // go to index_response_static_folder
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen property - to run the web server
// to listen on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));