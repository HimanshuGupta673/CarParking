import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
function ParkingSlotScreen() {
  const [slots,setSlot] = useState(0);
  const [slotsPerRow, setSlotsPerRow] = useState(4);
  const [bookSlotNum, setBookSlotNum] = useState(0);
  const navigate = useNavigate();
  const { loc, loc2 } = useParams();

  const [formData, setFormData] = useState({
    owner: '',
    vehicleNumber: '',
    parkingTime: '',
    price: ''
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlotsPerRow(2);
      } else if (window.innerWidth < 1024) {
        setSlotsPerRow(3);
      } else {
        setSlotsPerRow(4);
      }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  var slotsarr=[];
  const [slotArray,setSlotArray]=useState([]);
    async function getslots(){
      const API_URL = 'http://localhost:3001';
      try {
        console.log("aciton called")
           await axios.post(`${API_URL}/findSlot`,{"name":loc2}).then((res)=>{
            // console.log(res)
            slotsarr=res.data;
            console.log(slotsarr)
            var tmepArray = Array.from({ length: slotsarr.length }, (_, index) => ({
              number: index + 1,
              slotId: slotsarr[index].slotId,
              status: (parseInt(slotsarr[index].InTime)+parseInt(slotsarr[index].Time)*  3600000)>= Date.now() ? 'occupied' :  '#32de84',
            }));
            setSlotArray(tmepArray)
            red = slotArray.filter((slot) => slot.status === 'occupied').length;
            yellow = slotArray.filter((slot) => slot.status === 'booked').length;
            totalSlots = slotsarr.length; // Total number of slots
            setSlot(slotsarr.length);
  
          }).catch((e)=>{
            console.log(e);
           });
          //  console.log(res)
           
    } catch (error) {
        console.log('Error while calling getAllPlaces API ', error.message);
    }
  
    }
    
 

  var red =0;
  var yellow=0;
  var totalSlots=0 ;

  let occupiedPercentage = (red / totalSlots) * 100;
  occupiedPercentage += (yellow / totalSlots) * 100;

  let factor = 0;

  if (occupiedPercentage > 50) {
    factor = 10;
  } else if (occupiedPercentage > 80) {
    factor = 20;
  }
  let occupiedCount = 0;
 let status32de84Count = 0;

 slotArray.forEach((slot, index) => {
  if (slot.status === 'occupied') {
    occupiedCount++;
  }

  if (slot.status === '#32de84') {
    status32de84Count++;
  }
});


  const handleSlotClick = (slotNumber, slotStatus) => {
    if (slotStatus === '#32de84' && bookSlotNum !== slotNumber) {
      setBookSlotNum(slotNumber);
    }
  };
  const handleBook = (slotvalue) => {
    navigate(`/${loc}/${loc2}/${slotvalue}`)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const handleInputChange = (event, convertToUpperCase) => {
    const { name, value } = event.target;
    const updatedValue = convertToUpperCase ? value.toUpperCase() : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };
  const handleClick =async (idx) =>{
    console.log(slotArray[idx-1].slotId)
    var data={ 
      "OwnerName":document.getElementById('owner').value,
      "VehicleNumber":document.getElementById('vehicleNumber').value, 
      "Time":document.getElementById('parkingTime').value,  
      "SlotNumber":slotArray[idx-1].slotId,
      "Price":(40*parseInt(document.getElementById('parkingTime').value)).toString()
    }
    console.log(data)
    const API_URL = 'http://localhost:3001';
    await axios.post(`${API_URL}/bookSlot`,data).then((res)=>{
      // console.log(res)
      var temp=res.data;
      console.log(temp)
      getslots();
    }).catch((e)=>{
      console.log(e);
     });
    return false;
  }
  useEffect(()=>{
    getslots();
  },[handleClick])

  return (
    <div style={{ backgroundColor: 'rgb(147 154 181 / 31%)',minHeight:'100vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '94vh',
          padding: '0px 10px',
          paddingTop: '80px',
          paddingBottom: '20px',
        }}
      >
        <div
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            padding: '4px 8px',
          }}
        >
          <div>
  <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'red', marginRight: '5px' }}></span>
  Occupied: {occupiedCount}
</div>
<div>
  <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'yellow', marginRight: '5px' }}></span>
  Booked: {yellow}
</div>
<div>
  <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#32de84', marginRight: '5px' }}></span>
  Available: {status32de84Count}
</div>

          <div>Total Slots: {slots}</div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${slotsPerRow}, 1fr)`,
            gap: '20px',
            maxWidth: '800px',
            padding: '20px',
            border: '1px solid #000',
          }}
          className="parking-slots cursorPtr"
        >
          {slotArray.map((slot, index) => (
            <div
              style={{
                border: `4px solid ${slot.status === '#32de84' ? '#32de84' : (slot.status === 'occupied' ? 'red' : 'yellow')}`,
                backgroundColor:
                  bookSlotNum === slot.number ? '#32de84' : slot.status === '#32de84' ? 'white' : null,
                padding: '20px',
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '2px 2px 3px',
                cursor: slot.status === '#32de84' ? 'pointer' : 'not-allowed',
              }}
              key={index}
              className="parking-slot"
              onClick={() => handleSlotClick(slot.number, slot.status)}
            >
              Slot {slot.number}
            </div>
          ))}
        </div>
        {bookSlotNum!=0 && (
          <form onSubmit={handleFormSubmit} style={{ marginTop: '30px' }}>
          {/* <form  style={{ marginTop: '30px' }}> */}
            <div className="form-group">
              <label htmlFor="owner">Owner Name: </label>
              <input
                type="text"
                id="owner"
                name="owner"
                value={formData.owner}
                onChange={(e) => handleInputChange(e, true)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleNumber">Vehicle Number: </label>
              <input
                type="text"
                id="vehicleNumber"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={(e) => handleInputChange(e, true)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="parkingTime">Parking Time(in hour): </label>
              <input
                type="text"
                id="parkingTime"
                name="parkingTime"
                value={formData.parkingTime}
                onChange={(e) => handleInputChange(e, true)}
                required
                className="form-input"
              />
            </div>
            {formData.parkingTime ?
              <div className="form-group">
                <label htmlFor="price">price: </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.parkingTime * 40 + factor}
                  disabled
                  onChange={(e) => handleInputChange(e, true)}
                  className="form-input"
                />
              </div> : null
            }
            {/* <button onClick={()=>handleClick(formData.price,bookSlotNum)} type="submit" className="form-button"> */}
            <button onClick={()=>handleClick(bookSlotNum)}  className="form-button">

              Book Slot {bookSlotNum}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ParkingSlotScreen;
