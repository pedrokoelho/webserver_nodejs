// 02

// Import Express
const  express = require('express');

// Initialize a variable with Express
const app = express();

// Create a Router
app.get('/', (req, res) => {
    res.send('<h1>Hello Kitty<h1>');
});

// Listen property - to run the web server
// to listen on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));