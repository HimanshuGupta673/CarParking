const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

const parkingSlotSchema = new mongoose.Schema({
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location', 
    required: true,
  },
  slotNumber: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const bookingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location', 
    required: true,
  },
  parkingSlot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ParkingSlot',
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price:{
    type:String,
    required:true,
  },
  bookingTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
});


export const Location = mongoose.model('Location', locationSchema);
export const ParkingSlot = mongoose.model('ParkingSlot', parkingSlotSchema);
export const Booking = mongoose.model('Booking', bookingSchema);

