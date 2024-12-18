import { Router } from 'express';
import { handleGetUser, handleGetUsers, createUser } from './users.controllers.js';

export const usersRouter = Router();

usersRouter.get('/', handleGetUsers);
usersRouter.get('/:id', handleGetUser);
usersRouter.post('/', createUser);
usersRouter.put('/:id/favourites', updateUserFavourites);
usersRouter.put('/:id/buyed', updateUserBuyed);