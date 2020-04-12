const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

if (dotenv.error) {
    throw dotenv.error;
}

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
    console.log("Server running on port " + port);
});
