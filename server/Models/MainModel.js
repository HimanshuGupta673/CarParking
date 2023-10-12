
import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  name: String,
  place: Array,
});

// Define a BlogPost schema
const PlaceSchema = new mongoose.Schema({
    placeId: String,
    name: String,
    slots: Array,
});

const SlotSchema = new mongoose.Schema({
    slotno: String,
    OwnerName: String,
    VehicleNumber : String,
    Price:String,
    Time: String ,
    InTime: String,
});


const City = mongoose.model("City", CitySchema);
const Place = mongoose.model("Place", PlaceSchema);
const Slot = mongoose.model("Slot", SlotSchema);

export default { City, Place, Slot };
