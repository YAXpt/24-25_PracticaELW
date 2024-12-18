import e from 'express';
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

export async function updateUserFavourites(req, res) { //actualizar usuario, put
    const id = req.params.id;
    const favouriteItem = req.body.favourite;
    const user = await userModel.findById(id);

    // Verificar si el elemento ya existe en favoritos
    const favouriteIndex = user.favourites.indexOf(favouriteItem);

    if (favouriteIndex !== -1) {
        // Si el elemento existe, lo eliminamos
        user.favourites.splice(favouriteIndex, 1);
    } else {
        // Si no existe, añadimos solo si hay espacio (máximo 4)
        if (user.favourites.length >= 4) {
            return res.status(400).json({ message: "Favourites limit reached (4 maximum)." });
        }
        user.favourites.push(favouriteItem);
    }
    await user.save();

    return res.status(200).json({message: "Favourites updated successfully."});
}

export async function updateUserBuyed(req, res) { //actualizar usuario, put
    const id = req.params.id;
    const user = await userModel
        .findById(id);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }
    user.buyed.push(req.body.buyed);
    await user.save();
    res.json(user);
}