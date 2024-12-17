import express from 'express';
import { usersRouter } from './Users/users.routes.js';
import { productsRouter } from './Products/items.routes.js';
import { pikminsRouter } from './Pikmins/pikmins.routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

await mongoose.connect('mongodb://localhost:27017/myapp') 

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());

app.use('/users', usersRouter); // /users
app.use('/items', productsRouter); // /items
app.use('/pikmins', pikminsRouter); // /pikmins

app.get('/', (req, res) => { //exemple
    res.json({
        message: 'Nothing to see here'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});