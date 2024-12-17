import { Router } from 'express';
import { handleGetPikmin, handleGetPikmins} from './pikmins.controllers.js';

export const usersRouter = Router();

usersRouter.get('/', handleGetPikmins);
usersRouter.get('/:id', handleGetPikmin);