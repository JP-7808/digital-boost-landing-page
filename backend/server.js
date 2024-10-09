import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoute from './routes/contact.js';

dotenv.config();
const app = express();
const PORT = 7700;

// Connect to MongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        throw error;
    }
};

// Handle MongoDB disconnection
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected");
});

// Middleware
app.use(cors({
    origin: 'https://digital-boost-landing-page-frontend.vercel.app', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    credentials: true, // Allow credentials (e.g., cookies)
}));

app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/contact', contactRoute); // Contact route

// Start server and connect to MongoDB
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
});
