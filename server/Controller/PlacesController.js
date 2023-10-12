import schema from "../Models/MainModel.js";
const Place = schema.Place;

export const getAllPlaces = async (request, response) => {
    try {
      const allPlaces = await Place.find({});
      const placeNames = allPlaces.map(place => place.name);
      console.log(placeNames);
    return response.status(200).json(placeNames);
  
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }