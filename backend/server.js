// app.js

// Importing the express module
const express = require('express');
const app = express();
const AuthRouter = require('./Routers/Authentication');
const connectToMongoDb = require('./db');
app.use(express.json());
const cors = require('cors');
connectToMongoDb();

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }));


// Use the AuthRouter for the '/api' path
app.use('/api', AuthRouter);



// Set up the server to listen on port 3000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
