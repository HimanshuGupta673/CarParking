import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})
const contact = mongoose.model('contact', contactSchema);

export default item;