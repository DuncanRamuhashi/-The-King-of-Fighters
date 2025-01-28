import express, { Router } from 'express';

import { getPerson,getPersons,createPerson} from '../Controllers/personController.js';

const playerRouter = express.Router();

playerRouter.get("/:id",getPerson);
playerRouter.get("/",getPersons);

playerRouter.post("/",createPerson);

export default playerRouter;

