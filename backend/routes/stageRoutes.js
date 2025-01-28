import express, { Router } from 'express';

import { createStage,getStage } from '../Controllers/stageController.js';

const stageRouters = express.Router();

stageRouters.get("/:id",getStage);

stageRouters.post("/",createStage);

export default stageRouters;

