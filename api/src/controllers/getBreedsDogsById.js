const { Dogs, Temperaments } = require('../db.js');
const URL = 'https://api.thedogapi.com/v1/breeds';
const axios = require('axios');

const getBreedsDogById = async (id) => {
    if (isNaN(id)) {
        const dogsBD = await Dogs.findByPk(id, { include: [Temperaments] });

        const dog = dogsBD.toJSON();
        const temperaments = dog.Temperaments.map((temperament) => temperament.name);
        dog.temperaments = temperaments;
        delete dog.Temperaments;

        const imageId = dog.reference_image_id;
        dog.image = `https://cdn2.thedogapi.com/images/${imageId}.jpg`;

        // Agregar las propiedades name, height y weight al objeto
        dog.name = dog.name;
        dog.height = dog.height;
        dog.weight = dog.weight;

        return dog;
    }

    const dogsApi = (await axios.get(`${URL}/${id}`)).data;
    // ...

    const imageId = dogsApi.reference_image_id;
    dogsApi.image = `https://cdn2.thedogapi.com/images/${imageId}.jpg`;

    // Agregar las propiedades name, height y weight al objeto
    dogsApi.name = dogsApi.name;
    dogsApi.height = dogsApi.height;
    dogsApi.weight = dogsApi.weight;

    return dogsApi;
};


module.exports = getBreedsDogById;

