import { userModel } from './users.model.js';

export async function handleGetUsers(req, res) {
    const users = await userModel.find({});
    res.json(users);
}

export async function handleGetUser(req, res) { //obtener usuario por id, a través de mongoose, get
    const id = req.params.id;
    const foundUser = await userModel.findById(id);
    res.json(foundUser);
}

export async function createUser(req, res) { //crear usuario, post 
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
        res.status(409).send('Conflict: User already exists');
        return;
    }
    const newUser = new userModel(req.body);
    newUser.favourites = [];
    newUser.buyed = [];
    await newUser.save();
    res.json(newUser);
}