const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const Dog = require('../models/Dogs');
// const Temperament = require('../models/Temperaments');

//importo los controladores
const getBreedsDogsHandler = require('../handlers/getBreedsDogsHandler');
const getBreedsDogsByIdHandler = require('../handlers/getBreedsDogByIdHandler');
const getDogsByNameHandler = require('../handlers/getDogsByNameHandler');
const postDogsHandler = require('../handlers/postDogsHandler');
const getDogsByTemperamentsHandler = require('../handlers/getDogsByTemperamentsHandler');
const getAllDogsHandler = require('../handlers/getAllDogsHandler');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//! GET /dogs
router.get('/dogs', getBreedsDogsHandler);

//! GET | /dogs/:idRaza
router.get('/dogs/:id', getBreedsDogsByIdHandler);

//! GET | /dogs/name?="..."
router.get('/name', getDogsByNameHandler);

//! POST | /dogs
router.post('/dogs', postDogsHandler);

//! GET | /temperaments
router.get('/temperaments', getDogsByTemperamentsHandler);

// ###
//!GET /home
//ruta para obtener los perros para el home en el front
router.get('/home', getAllDogsHandler);


module.exports = router;
