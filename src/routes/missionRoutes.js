import express from 'express';
import { createMission, getMissions, getMissionsById, putMission, missionDelete} from '../controllers/missionController.js'
const router = express.Router();



router.post('/', createMission) // referencia a função que esta dentro do arquivo

router.get('/', getMissions)

router.get('/:id', getMissionsById)

router.put('/:id', putMission)

router.delete('/:id', missionDelete)


export const definedRoutes = router

