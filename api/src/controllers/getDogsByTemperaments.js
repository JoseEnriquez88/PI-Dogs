const { Temperaments } = require('../db.js');
const URL = 'https://api.thedogapi.com/v1/breeds';
const axios = require('axios');

const getDogsByTemperaments = async (temperament) => {
    const { data } = await axios.get(URL); //hago la consulta a la api para obtener temperamentos
    let temperamentos = [];

    data.forEach((dog) => { //separo temperamentos usando split y los agrego en el array
      const dogTemps = dog.temperament.split(',').map((temp) => temp.trim());
      temperamentos.push(...dogTemps);
    });

    const TempsBD = await Temperaments.bulkCreate(temperamentos); //guardo los temperamentos en la BD 
    return TempsBD
};

module.exports = getDogsByTemperaments;
