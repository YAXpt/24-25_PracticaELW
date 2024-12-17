import { pikminData } from './pikmins.data.js';

export async function handleGetPikmins(req, res) {
    const pikmins = await pikminData.find({});
    res.json(pikmins);
}

export async function handleGetPikmin(req, res) { //obtener usuario por id, a través de mongoose, get
    const id = req.params.id;
    const foundPikmin = await pikminData.findById(id);
    res.json(foundPikmin);
}