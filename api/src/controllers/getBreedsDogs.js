//Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

const getApiData = require('./getApiData');

const getBreedsDogs = async (req, res) => {
    try {
        const dogBreeds = await getApiData(); //hago la peticion a la api
        
        //corroboro que haya razas de perros caso contrario tira mensaje de error
        if(!dogBreeds || dogBreeds.length === 0) throw new Error('No se encontraron razas de perro.');
        
        //si se encuentran las razas hago mapeo de las razas de la api
        const breeds = dogBreeds.map(dog => ({ breed_group: dog.breed_group }));
        return res.status(200).json(breeds); //retorno un status 200 con las razas
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    };
};

module.exports = getBreedsDogs;