const { Router } = require('express');
const { Op } = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Dog = require('../models/Dogs');
const Temperament = require('../models/Temperaments');

//importo los controladores
const getBreedsDogs = require('../controllers/getBreedsDogs');
const getBreedsDogsById = require('../controllers/getBreedsDogsById');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//! GET /dogs
router.get('/dogs', getBreedsDogs);

//! GET | /dogs/:idRaza
router.get('/dogs/:id', getBreedsDogsById);

//! GET | /dogs/name?="..."
router.get('/dogs/name', async (req, res) => {
    const { name } = req.query;
    try {
        const dogs = await Dog.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}`
                }
            },
            include:{
                association: 'temperaments',
                attributes: ['name'],
                through: { attributes: [] }
            }
        });
        if(!dogs.length === 0) return res.status(404).send('No results found');
        return res.json(dogs);
    } catch (error) {
       return res.status(500).json({ message: 'Internal server error' });
    }
});

//! POST | /dogs
router.post('/dogs', async (req, res) => {
    const { name, height, weight, life_span, temperament } = req.body;
    try { // creo la raza de perro
        const newDog = await Dog.create({
            name, 
            height, 
            weight, 
            life_span
        });

        const temperaments = await Temperament.findAll({
            where:{
                name:{
                    [Op.in]: temperament.map(temp => temp.toLoweCase())
                }
            }
        });

        await newDog.setTemperaments(temperaments);

        return res.status(200).json(newDog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'There was an error creating the dog' });
    }
});

//! GET | /temperaments
const URL_BASE = '';
router.get('/temperaments', (req, res) => {
    try {
        
    } catch (error) {
        
    }
});



module.exports = router;
