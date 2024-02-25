import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from './db/knexfile.js'; 

// Import routes
import proxyRoutes from './api/routes/proxyRoutes.js'; 

// Initialize Knex
const environment = process.env.NODE_ENV || 'development';
const knexInstance = Knex(knexConfig[environment]);
Model.knex(knexInstance);

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Use Routes
app.use('/api/proxy', proxyRoutes);

// Catch-all route for handling 404 (Not Found)
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

