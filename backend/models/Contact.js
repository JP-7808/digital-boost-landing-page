import mongoose from "mongoose";

// Define the contact schema 
const contactSchema = new mongoose.Schema({
    name: String,
    companyName: String,
    email: String,
    phoneNumber: String,
    message: String
});

// Export the Contact model 
export default mongoose.model('Contact', contactSchema);
