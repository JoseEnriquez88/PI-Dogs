//Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

const getApiData = require('./getApiData');

const getBreedsDogs = async (req, res) => {
    try {
        const dogBreeds = await getApiData();
        
        if(!dogBreeds || dogBreeds.length === 0) throw new Error('No dogs breeds found.');
        
        const breeds = dogBreeds.map(dog => ({ breed_group: dog.breed_group }));
        return res.status(200).json(breeds);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    };
};

module.exports = getBreedsDogs;