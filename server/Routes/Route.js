import express ,{Router} from  'express';
import { getAllPlaces } from '../Controller/PlacesController.js';
const router = express.Router();
// router.get('/places',getAllPlaces);
export default router;