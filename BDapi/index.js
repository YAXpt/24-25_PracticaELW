import express from 'express';
import { usersRouter } from './users.routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

await mongoose.connect('mongodb://localhost:27017/myapp') 

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());

app.use('/users', usersRouter); // /users

app.get('/', (req, res) => { //exemple
    res.json({
        message: 'Hello World'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});