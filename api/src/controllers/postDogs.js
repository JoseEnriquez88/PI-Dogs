const { Dogs, Temperaments } = require('../db.js');
const { Op } = require('sequelize');
const formValidation = require('../helpers/formValidation.js');

const postDogs = async (name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament) => {
  formValidation(name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament);

  const height = `${minHeight} - ${maxHeight}`;
  const weight = `${minWeight} - ${maxWeight}`;

  const newDog = await Dogs.create({
    name,
    image,
    height,
    weight,
    life_span,
    temperament
  });

  const temperaments = await Temperaments.findAll({
    where: {
      name: {
        [Op.in]: temperament.map(temp => temp.toLowerCase())
      }
    }
  });

  await newDog.setTemperaments(temperaments);

  if (!newDog) throw new Error(`El perro ${newDog.name} no pudo crearse.`);
  return `El perro ${newDog.name} fue creado`;
};

module.exports = postDogs;
