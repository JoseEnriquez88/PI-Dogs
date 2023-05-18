const axios = require('axios');
//obtengo los datos de la api

const URL = 'https://api.thedogapi.com/v1/breeds';

const getApiData = async () => {
    try {
        const response = await axios.get(URL);
        return response.data.map(dog => ({
            id: dog.id,
            name: dog.name,
            image: dog.image?.url,
            temperament: dog.temperament?.split(', '),
            weight: {
                imperial: dog.weight?.imperial,
                metric: dog.weight?.metric,
            },
            height: {
                imperial: dog.height?.imperial,
                metric: dog.height?.metric,
            },
            life_span: dog.life_span,
            bred_for: dog.bred_for,
            breed_group: dog.breed_group,
            origin: dog.origin,
        }));
    } catch (error) {
        throw new Error('Error fetching dog data');
    }
};

module.exports = getApiData;