const { Temperaments } = require('../db.js');
const URL = 'https://api.thedogapi.com/v1/breeds';
const axios = require('axios');

const getDogsByTemperaments = async () => {
  const { data } = await axios.get(URL);
  const temperamentos = [];

  data.forEach((dog) => {
    const dogTemps = dog.temperament.split(',').map((temp) => temp.trim());
    temperamentos.push(...dogTemps);
  });

  // Guardar los temperamentos en la base de datos
  const uniqueTemperamentos = [...new Set(temperamentos)];
  const temperamentosGuardados = await Temperaments.bulkCreate(
    uniqueTemperamentos.map((temp) => ({ name: temp })),
    { ignoreDuplicates: true }
  );

  return temperamentosGuardados;
};

module.exports = getDogsByTemperaments;
