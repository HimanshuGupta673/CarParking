import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Select, MenuItem } from '@mui/material';
import { getAllPlaces } from '../Actions/Action';
import axios from 'axios';

function HomeScreen() {
  const [location, setLocation] = useState('');
  const [location2, setLocation2] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${location}/${location2}`);
  }
  // var places=[];
  const [places,setPlaces]=useState([]);
  // useEffect(async () =>  {
  //   // console.log("useeffect called");
  //   // places = await getAllPlaces();
  // }, [])
  async function getplaces() {
    const API_URL = 'http://localhost:3001';
    try {
      console.log("aciton called")
      await axios.get(`${API_URL}/places`).then((res) => {
        // console.log(res)
        setPlaces(res.data);
        // places = res.data;
        console.log(places)

      }).catch((e) => {
        console.log(e);
      });
      //  console.log(res)

    } catch (error) {
      console.log('Error while calling getAllPlaces API ', error.message);
    }

  }
  useEffect(()=>{
    getplaces();
  },[])
  console.log(places)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#211f1f',
      }}
    >
      <div className='homebanner' id='homebanner'>
        <div style={{ padding: '0px 10px', color: 'white', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', marginTop: '60px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem' }}><strong>PARKING JUST GOT A LOT SIMPLER</strong></div>
          <div id='fontfam' style={{ fontStyle: 'italic', fontSize: '1.4rem' }}>Book the Best Spaces and Save Time!</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <div>
            <div >
              <select
                style={{
                  padding: '10px 20px',
                  width: '100%',
                  fontFamily: 'Croissant One'
                }}
                name="location"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              >
                <option value="">Select location</option>
                <option value="Kurukshetra">Kurukshetra</option>
              </select>
            </div>
            {location ?
              <div style={{ marginTop: '30px' }}>
                <select
                  style={{
                    padding: '10px 20px',
                    fontFamily: 'Croissant One'
                  }}
                  name="location2"
                  id="location2"
                  onChange={(e) => setLocation2(e.target.value)} // Corrected placement of onChange
                  value={location2} // Assuming `location` is the selected value
                >
                  { places.map((place,idx) => (
                    <option  value={(idx+1).toString()}>{place}</option>
                  ))}
                </select>
              </div>
              : null}
            {location2 && location
              ?
              <div>
                <div className='slotSearch' style={{ marginTop: '26px' }}><button onClick={() => handleClick(location, location2)} style={{ padding: '8px 10px', width: '100%', backgroundColor: 'green', border: 'none', fontFamily: 'Croissant One', color: 'white' }}>Search For Slot</button></div>
              </div>
              : null}
          </div>
        </div>
      </div>

      {/* ///////////////////////// */}
      <div id='carousel' style={{
        height: '15rem',
        marginTop: '8rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 10px'
      }}>
      </div>
    </Box >
  );
}

export default HomeScreen;
