const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const Dog = require('../models/Dogs');
// const Temperament = require('../models/Temperaments');

//importo los controladores
const getBreedsDogs = require('../controllers/getBreedsDogs');
const getBreedsDogsById = require('../controllers/getBreedsDogsById');
const getBreedsDogsByName = require('../controllers/getBreedsDogsByName');
const postDogs = require('../controllers/postDogs');
const getDogsByTemperaments = require('../controllers/getDogsByTemperaments');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//! GET /dogs
router.get('/dogs', getBreedsDogs);

//! GET | /dogs/:idRaza
router.get('/dogs/:id', getBreedsDogsById);

//! GET | /dogs/name?="..."
router.get('/name', getBreedsDogsByName);

//! POST | /dogs
router.post('/dogs', postDogs);

//! GET | /temperaments
router.get('/temperaments', getDogsByTemperaments);


module.exports = router;
