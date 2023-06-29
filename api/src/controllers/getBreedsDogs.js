//Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

const getApiData = require('./getApiData');

const getBreedsDogs = async () => {
    const dogBreeds = await getApiData(); //hago la peticion a la api
    if (!dogBreeds || dogBreeds.length === 0) throw new Error('No se encontraron razas de perro.');
    const breeds = dogBreeds.map(dog => ({ breed_group: dog.breed_group }));
    return breeds;
};

module.exports = getBreedsDogs;