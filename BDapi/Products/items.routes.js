import { Router } from 'express';
import { handleGetProducts, handleGetProduct } from './items.controller';

export const productsRouter = Router();

productsRouter.get('/', handleGetProducts);
productsRouter.get('/:id', handleGetProduct);
productsRouter.put('/:id', updateItemStock); //actualizar stock


