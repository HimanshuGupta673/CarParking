import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const quotes = [
  {
    text: 'RESERVE\nPREPAY\n& SAVE',
    description: 'Book a space in just a few easy clicks',
  },
  {
    text: 'DRIVE\nARRIVE\n& PARK',
    description: 'Your space is waiting – pull in and go do your thing',
  },
  {
    text: 'DISCOVER\nAMAZING\nSPACES',
    description: 'Find parking anywhere, for now or for later',
  },
];
function HomeScreen() {
  const [location, setLocation] = useState('');
  const [location2, setLocation2] = useState('');
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/${location}/${location2}`);
  }

  return (
    <>
      <div className='homebanner' id='homebanner'>
        <div id='fontfam'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '2rem',
            paddingTop: '28px',
            marginLeft: '30px',
            color: 'white'
          }}>
          <div><strong>PARK</strong>Smartly</div>
          <div className='headerTags' style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '17px',

          }}>
            <a style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s linear', }} href="#"><div style={{ marginRight: '14px' }}>Explore Us</div></a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="/contact"><div style={{ marginRight: '14px' }}>Contact Us</div></a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="/register"><div style={{ marginRight: '14px' }}>Register</div></a>
          </div>
        </div>
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
                  width:'100%',
                  fontFamily:'Croissant One'
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
              <div style={{marginTop:'30px'}}>
                <select
                  style={{
                    padding: '10px 20px',
                    fontFamily:'Croissant One'
                  }}
                  name="location2"
                  id="location2"
                  onChange={(e) => setLocation2(e.target.value)} // Corrected placement of onChange
                  value={location2} // Assuming `location` is the selected value
                >
                  <option value="">Select location 2</option>
                  <option value="Kurukshetra">NIT Kurukshetra</option>
                  <option value="Kurukshetra University">Kurukshetra University</option>
                  <option value="Brahma Sarovar">Brahma Sarovar</option>
                  <option value="Divine Mall">Divine Mall</option>
                  <option value="Pipli">Pipli</option>
                </select>
              </div>
              : null}
              {location2 && location
              ?
              <div>
                <div className='slotSearch' style={{marginTop :'26px'}}><button onClick={()=>handleClick(location,location2)} style={{padding:'8px 10px',width:'100%',backgroundColor:'green',border:'none',fontFamily:'Croissant One',color:'white'}}>Search For Slot</button></div>
              </div>
              :null}
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
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000} // Set the interval to switch quotes (5 seconds in this example)
        >
          {quotes.map((quote, index) => (
            <div key={index}>
              <div id='carouselfont'
                style={{
                  fontSize: '3rem',
                  color: 'black',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontFamily: 'fontfam'
                }}
              >
                <strong style={{ color: '#098dc3' }}>{quote.text.split('\n')[0]}</strong>{' '}
                {quote.text.split('\n')[1]}{' '}
                <strong style={{ color: '#098dc3' }}>{quote.text.split('\n')[2]}</strong>
              </div>
              <div
                id='fontfam'
                style={{
                  fontStyle: 'italic',
                  fontSize: '1.4rem',
                  color: 'black',
                  textAlign: 'center',
                  marginTop: '10px',
                }}
              >
                {quote.description}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div id="footer" style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'space-around', marginBottom: '0px', paddingBottom: '0px' }}>
        <div style={{ marginLeft: '2%', color: 'white' }}><h3>PARKSmartly ©2023. All Rights Reserved.</h3></div>
        <a style={{ textDecoration: 'none' }} href="#homebanner"><div style={{ marginRight: '2%', background: '#098dc3', padding: ' 2px 8px', color: 'white' }}>TOP ^</div></a>
      </div>
    </>
  );
}

export default HomeScreen;
