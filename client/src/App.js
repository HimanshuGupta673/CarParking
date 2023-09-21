import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen2 from "./screens/HomeScreen2";
import HomeScreen from "./screens/HomeScreen";
import ParkingSlotScreen from './screens/ParkingSlotScreen';
import BookingDetails from './screens/BookingDetails';
import Register from './components/Register';
import Contact from './components/Contact';
import Header from './components/Header';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen2/>}/>
          <Route path='/bookslot' element={<HomeScreen/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/:loc/:loc2' element={<ParkingSlotScreen/>}/>
          {/* <Route path='/:loc/:loc2/:slotValue' element={<BookingDetails/>}/> */}
        </Routes>
      </Router>
     
     
    </React.Fragment>
  );
}

export default App;
