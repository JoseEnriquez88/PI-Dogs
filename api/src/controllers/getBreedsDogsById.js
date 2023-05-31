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
        // primero verifico si el id es numero o UUID para la BD
        if(!isNaN(id)){
            const data = await getApiData(); // busco por numero en la API
            dog = data.find(dogAPI => dogAPI.id === +id);

            if(dog) return res.status(200).json(dog) // si encuentra el perro en la API mando estado 200
            throw new Error(`no se encontró un perro con el id: ${id}`); // caso contrario lanzo el error con mensaje
        }else{
            const dogBD = await Dogs.findByPk(id, { include: Temperaments }) // busco por UUID en la BD

            if(dogBD){
                dog = dogBD.toJsON();
                return res.status(200).json(dog);
            }else{
                throw new Error(`no se encontró un perro con el id: ${id}`);
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = getBreedsDogById;