import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
function ParkingSlotScreen() {
  const [slots] = useState(16);
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

  const slotArray = Array.from({ length: slots }, (_, index) => ({
    number: index + 1,
    status: index % 3 === 0 ? 'occupied' : index % 4 === 0 ? 'booked' : '#32de84',
  }));

  const red = slotArray.filter((slot) => slot.status === 'occupied').length;
  const yellow = slotArray.filter((slot) => slot.status === 'booked').length;
  const totalSlots = slots; // Total number of slots

  let occupiedPercentage = (red / totalSlots) * 100;
  occupiedPercentage += (yellow / totalSlots) * 100;

  let factor = 0;

  if (occupiedPercentage > 50) {
    factor = 10;
  } else if (occupiedPercentage > 80) {
    factor = 20;
  }


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
    console.log('Form Data:', formData);
    setFormData({
      owner: '',
      vehicleNumber: '',
      parkingTime: '',
      price: ''
    });
  };
  const handleInputChange = (event, convertToUpperCase) => {
    const { name, value } = event.target;
    const updatedValue = convertToUpperCase ? value.toUpperCase() : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };
  const handleClick =() =>{
    
  }


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
  Occupied: {slotArray.filter(slot => slot.status === 'occupied').length}
</div>
<div>
  <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'yellow', marginRight: '5px' }}></span>
  Booked: {slotArray.filter(slot => slot.status === 'booked').length}
</div>
<div>
  <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#32de84', marginRight: '5px' }}></span>
  Available: {slotArray.filter(slot => slot.status === '#32de84').length}
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
            <button onClick={()=>handleClick(formData.price)} type="submit" className="form-button">
              Book Slot {bookSlotNum}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ParkingSlotScreen;
