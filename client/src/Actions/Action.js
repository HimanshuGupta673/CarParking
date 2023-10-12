import axios from 'axios';

const API_URL = 'https://localhost:3001'

export const getAllPlaces = () => async() => {
    try {
        console.log("aciton called")
           const res = await axios.get(`${API_URL}/places`).then(()=>{console.log("hello world")}).catch((e)=>{
            console.log(e);
           });
           console.log(res)
           return res; 
    } catch (error) {
        console.log('Error while calling getAllPlaces API ', error.message);
    }
}