const getApiData = require('./getApiData');
//obtiene los perros de la api para renderizar en el home del front
const getAllDogs = async (req, res) => {
    try {
        const data = await getApiData();

        if (!data || data.length === 0) throw new Error('No se encuentran perros para mostrar');

        const dogs = data.map(dog => ({
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            temperament: dog.temperament,
            weight: dog.weight.metric,
        }))

        return res.status(200).json(dogs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = getAllDogs;
