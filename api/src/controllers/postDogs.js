const { Dogs, Temperaments } = require('../db.js');
const { Op } = require('sequelize');
const formValidation = require('../helpers/formValidation.js');

const postDogs = async (name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments) => {
  // formValidation(name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments);

  const height = `${minHeight} - ${maxHeight}`;
  const weight = `${minWeight} - ${maxWeight}`;

  const newDog = await Dogs.create({
    name,
    image,
    height,
    weight,
    life_span
  });

  const temperamentInstances = await Temperaments.findAll({
    where: {
      name: {
        [Op.in]: temperaments.map(temp => temp.toLowerCase())
      }
    }
  });

  await newDog.addTemperaments(temperamentInstances);

  if (!newDog) throw new Error(`El perro ${newDog.name} no pudo crearse.`);
  return `El perro ${newDog.name} fue creado`;
};

module.exports = postDogs;
