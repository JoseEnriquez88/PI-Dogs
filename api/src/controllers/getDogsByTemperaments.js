const { Temperaments } = require('../db.js');
const URL = 'https://api.thedogapi.com/v1/breeds';
const axios = require('axios');

const getDogsByTemperaments = async (req, res) => {
  try {
    const { data } = await axios.get(URL); //hago la consulta a la api para obtener temperamentos
    let temperamentos = [];

    data.forEach((dog) => { //separo temperamentos usando split y los agrego en el array
      const dogTemps = dog.temperament.split(',').map((temp) => temp.trim());
      temperamentos.push(...dogTemps);
    });

    const TempsBD = await Temperaments.bulkCreate(temperamentos); //guardo los temperamentos en la BD 

    return res.status(200).json(TempsBD); //retorno los temperamentos con respuesta exitosa
  } catch (error) {
    res.status(500).json({ message: 'Error getting dog temperaments' });
  }
};

module.exports = getDogsByTemperaments;
