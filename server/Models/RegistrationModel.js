import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true,
    },
    userName: {
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
    totalSlots: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    
})
const owner = mongoose.model('owner', ownerSchema);

export default item;