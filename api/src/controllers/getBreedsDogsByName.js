const getApiData = require('../controllers/getApiData');
const { Op } = require('sequelize');
const { Dogs, Temperaments } = require('../db.js');

const getBreedsDogsByName = async (req, res) => {
  const { name } = req.query;
  try {
    const lowerCaseName = name.toLowerCase();
    
    const apiData = await getApiData();
    const apiDogs = apiData.filter((dog) => dog.name.toLowerCase().includes(lowerCaseName));
    if(apiDogs) return res.status(200).json(apiDogs);
    
    const dogBD = await Dogs.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: Temperaments,
    });

    const dogs = [...apiDogs, ...dogBD];

    if (dogs.length === 0) throw new Error(`No se encontraron razas de perro con el siguiente nombre: ${nombre}`);

    return res.json(dogs);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: error.message });
  }
};

module.exports = getBreedsDogsByName;
