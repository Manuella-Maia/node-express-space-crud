import express from 'express';
import { createMission, getMissions, getMissionsById} from '../controllers/missionController.js'
const router = express.Router();



router.post('/', createMission) // referencia a função que esta dentro do arquivo

router.get('/', getMissions)

router.get('/:id', getMissionsById)


export const definedRoutes = router

