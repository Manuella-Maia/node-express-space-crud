import express from 'express';
import { createMission } from '../controllers/missionController.js'
const router = express.Router();



router.post('/', createMission) // referencia a função que esta dentro do arquivo 


export const definedRoutes = router

