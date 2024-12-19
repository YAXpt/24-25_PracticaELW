import { pikminModel } from './pikmins.model.js';
import mongoose from 'mongoose';

const pikminImage = "/Uploads/pikminImages/";

const pikminsData = [{
    name: 'Pikmin Rojo',
    type: 'fuego',
    color: 'rojo',
    description: 'description1',
    image: `${pikminImage}1.jpg`
},
{
    name: 'Pikmin Amarillo',
    type: 'electricidad',
    color: 'amarillo',
    description: 'description2',
    image: `${pikminImage}2.jpg`
},
{
    name: 'Pikmin Azul',
    type: 'agua',
    color: 'azul',
    description: 'description3',
    image: `${pikminImage}3.jpg`
},
{
    name: 'Pikmin Blanco',
    type: 'veneno',
    color: 'blanco',
    description: 'description4',
    image: `${pikminImage}4.jpg`
},
{
    name: 'Pikmin Morado',
    type: 'fuerza',
    color: 'morado',
    description: 'description5',
    image: `${pikminImage}5.jpg`
},
{
    name: 'Pikmin Alado',
    type: 'vuelo',
    color: 'rosa',
    description: 'description6',
    image: `${pikminImage}6.jpg`
},
{
    name: 'Pikmin Pétreo',
    type: 'roca',
    color: 'gris',
    description: 'description7',
    image: `${pikminImage}7.jpg`
},
{
    name: 'Pikmin Gélido',
    type: 'hielo',
    color: 'cian',
    description: 'description8',
    image: `${pikminImage}8.jpg`
},
{
    name: 'Pikmin Luminoso',
    type: 'nocturno',
    color: 'verde',
    description: 'description9',
    image: `${pikminImage}9.jpg`
},
{
    name: 'Pikmin Bulbo',
    type: 'bulbo',
    color: 'multicolor',
    description: 'description10',
    image: `${pikminImage}10.jpg`
}];

async function populateDatabaseP() {
    try {
        // await mongoose.connect("mongodb://localhost:27017/BDapi");

        // Limpiar la colección antes de poblarla
        await pikminModel.deleteMany();

        // Insertar los datos iniciales
        await pikminModel.insertMany(pikminsData);

    } catch (error) {
        console.error("Error al poblar la base de datos", error);
    }
}

export default populateDatabaseP;