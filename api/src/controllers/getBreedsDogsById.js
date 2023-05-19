// Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// La raza es recibida por parámetro (ID).
// Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// Debe funcionar tanto para los perros de la API como para los de la base de datos.

const { Dogs, Temperaments } = require('../db.js');
const getApiData = require('./getApiData.js');


const getBreedsDogById = async (req, res) => {
    const { id } = req.params;
    try {
        let dog;
        const dogBD = await Dogs.findByPk(id, { include: Temperaments });
        if(dogBD){
            dog = dogBD.toJSON();
        }else{
            const apiData = await getApiData();
            dog = apiData.find(dogg => dogg.id === +id);
        }
        if(dog){
            res.json(dog);
        }else{
            res.status(404).json({ message: 'Breed not found' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error getting breed's details" });
    }
};

module.exports = getBreedsDogById;