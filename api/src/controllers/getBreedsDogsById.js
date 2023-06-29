// Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// La raza es recibida por parámetro (ID).
// Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// Debe funcionar tanto para los perros de la API como para los de la base de datos.

const { Dogs, Temperaments } = require('../db.js');
const URL = 'https://api.thedogapi.com/v1/breeds';
const axios = require('axios');

const getBreedsDogById = async (id) => {
    if (isNaN(id)) {
        const dogsBD = await Dogs.findByPk(id, { include: [Temperaments] });
        if (!dogsBD) throw new Error('No se encuentran perros en la base de datos.');

        const dog = dogsBD.toJSON();
        const temperaments = dog.Temperaments.map((temperament) => temperament.name);
        dog.temperaments = temperaments;
        delete dog.Temperaments;

        return dog;
    }

    const dogsApi = (await axios.get(`${URL}/${id}`)).data;
    if(!dogsApi) throw new Error('No se encuentran perros en la API');
    return dogsApi;
};

module.exports = getBreedsDogById;