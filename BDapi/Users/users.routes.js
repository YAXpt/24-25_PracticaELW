import { Router } from 'express';
import { handleGetUser, handleGetUsers, createUser, handleLogin, updateUserFavorites, updateUserBuyed } from './users.controllers.js';

export const usersRouter = Router();

usersRouter.get('/', handleGetUsers);
usersRouter.get('/:id', handleGetUser);
usersRouter.post('/', createUser);
usersRouter.post('/login', handleLogin);
usersRouter.put('/:id/favourites', updateUserFavorites);
usersRouter.put('/:id/buyed', updateUserBuyed);