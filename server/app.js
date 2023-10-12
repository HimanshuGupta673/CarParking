import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
// import paymentRoute from './Routes/PaymentRoute.js'
import cors from "cors";
config({ path: "./config/config.env" });
import mongoose from "mongoose";
import schema from "./Models/MainModel.js";
import { getAllPlaces } from "./Controller/PlacesController.js";
import router from "./Routes/Route.js";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const City = schema.City;
const Place = schema.Place;
const Slot= schema.Slot;

var db = mongoose.connection;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "*",
  })
);

app.post("/findSlot", async (req, res) => {
  try {
    // Find the place based on the provided name
    const place = await Place.findOne({ placeId: req.body.name });

    if (place) {
      // Extract the slotIds from the place's slots array
      const slotIds = place.slots;

      if (slotIds && slotIds.length > 0) {
        // Find the slots with matching slotIds
        const slots = await Slot.find({ slotno: { $in: slotIds } });

        if (slots && slots.length > 0) {
          // Return the slots data along with their slotIds
          const slotData = slots.map((slot) => ({
            slotId: slot.slotno,
            OwnerName: slot.OwnerName,
            VehicleNumber: slot.VehicleNumber,
            Time: slot.Time,
            InTime: slot.InTime,
          }));
          res.status(200).json(slotData);
        } else {
          res.status(200).json([]); // Send an empty array if no matching slots found
        }
      } else {
        res.status(200).json([]); // Send an empty array if there are no slots
      }
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to book a parking slot for a new person
app.post('/bookSlot', async (req, res) => {
  const { OwnerName, VehicleNumber, Time,  SlotNumber ,Price} = req.body;

  try {
    // Find the slot by SlotNumber
    const slotToBook = await Slot.findOne({ slotno: SlotNumber });
    console.log(slotToBook);
    if (!slotToBook) {
      var temp=new Slot();
      temp.OwnerName = OwnerName;
      temp.VehicleNumber = VehicleNumber;
      temp.Time = Time;
      temp.InTime = Date.now().toString();
      temp.slotno= SlotNumber;
      temp.Price=Price;
      
      await temp.save();
      // return res.status(400).json({ message: "Slot not found" });
      return res.status(200).json({
        message: `Slot ${SlotNumber} assigned to ${OwnerName}`,
        slot: temp,
      });
    }

    // Check if the slot is already occupied
    const intime = parseInt(slotToBook.InTime);
    const time = parseFloat(Time)*  3600000 ;

    // Calculate the current time (you my need to adapt this based on your needs)
    const currentTime = Date.now();
    // console.log(currentTime,InTime,intime ,time,(intime+time));
    if (intime + time >= currentTime) {
      return res.status(400).json({ message: "Slot is already occupied" });
    }
    else{
      slotToBook.OwnerName = OwnerName;
      slotToBook.VehicleNumber = VehicleNumber;
      slotToBook.Time = Time;
      slotToBook.InTime = Date.now().toString();
      slotToBook.Price=Price;
    
      // Update the slot with person's information
      

      // Save the updated slot
      await slotToBook.save();
    }
    return res.status(200).json({
      message: `Slot ${SlotNumber} assigned to ${OwnerName}`,
      slot: slotToBook,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  const ownerName = req.body.name;
  const vehicleNumber = req.body.vehicleNumber;
  const Time = req.body.time;
  const InTime = new Date().getTime();

  const dataPush=new Slot(req.body)
  console.log(dataPush)

  await dataPush.save().then(() => {
    console.log("success");
    res.send("sucess");
  })
  .catch((err) => {
    console.log(err);
    res.status(102).send(new Error(err));
  });
  // if (data) {
  //   if(data.InTime + data.Time > Date.now().getTime())
  //   {
  //     await dataPush.save().then(() => {
  //       // console.log("success");
  //       res.send("sucess");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(102).send(new Error(err));
  //     });
  //   }else{
  //     res.send({return : "User Exists"});
  //   }
  // } else {
  //   await dataPush
  //   .save()
  //   .then(() => {
  //     // console.log("success");
  //     res.send("sucess");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(102).send(new Error(err));
  //   });
  //   // The user does not exist
  // }
});
app.post("/insertPlace",async (req,res)=>{
  console.log(req.body)
  const loc= await Place.findOne({placeId: req.body.name});
  if(loc){
    // res.send(loc.slots);
    res.status(102).send({ message: "place already exist" });
  }
  else{
    const place= new Place(req.body);
    place.save().then(()=>{
      res.send("sucess");
    }).catch((err)=>{
      console.log(err);
    res.status(102).send({ message: "server error" });

    })
  }
})
app.post("/insertSlot",async (req,res)=>{
  console.log(req.body)
  // const loc= await Place.findOne({placeId: req.body.name});
  for (var i=1;i<101;i++){
    var slt= new Slot({
      slotno: i.toString(),
      OwnerName: "String",
      VehicleNumber : "1234555",
      Time: "1" ,
      InTime: "23424"
    });
    slt.save().then(()=>{
      console.log(i);
    })
  }
  res.send("sucess");
  // if(loc){
  //   // res.send(loc.slots);
    
  //   res.status(102).send({ message: "place already exist" });
  // }
  // else{
  //   const place= new Place(req.body);
  //   place.save().then(()=>{
  //     res.send("sucess");
  //   }).catch((err)=>{
  //     console.log(err);
  //   res.status(102).send({ message: "server error" });

  //   })
  // }
})
app.get("/places",async (req,res)=>{
  try {
    const allPlaces = await Place.find({});
    const placeNames = allPlaces.map(place => place.name);
    console.log(placeNames);
    res.send(placeNames);

  } catch (error) {
    res.status(500).json(error.message);
  }
  
})
//  app.get('/places',getAllPlaces)

const port = 3001;
app.listen(port, async() => {
  await mongoose
    .connect(
      `mongodb+srv://${USERNAME}:${PASSWORD}@carparkingcluster.eql1if8.mongodb.net/CarParking`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ).then(() => {
      console.log("Mongoogse Connected")
      
    })
    .then(() => {
      console.log("Server Connected");
      // seedData();
    })
    .catch((e) => {
      // console.log(e);
    });
});
