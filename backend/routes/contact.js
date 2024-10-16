import express from "express";
import Contact from "../models/Contact.js"; 

const router = express.Router();

// POST route to handle contact form submissions
router.post('/submit', async (req, res) => {
    try {
        const newContact = new Contact(req.body); // Create a new contact instance with the request body
        await newContact.save(); // Save the contact to the database
        res.status(200).send('Contact saved successfully'); // Send success response
    } catch (error) {
        res.status(500).send("Error saving contact" + error.message); // Handle error and send response
    }
});

// get all contact message
router.get('/getAllMessage', async(req, res) => {
    try{
        const messages = await Contact.find();
        res.status(200).json(messages);
    }
    catch(err){
        res.status(500).send("Error in acheving contact data" + error.message);
    }
})

export default router; // Export the router