const { Dogs, Temperaments } = require('../db.js');
const { Op } = require('sequelize');
const formValidation = require('../helpers/formValidation.js');

const postDogs = async (req, res) => {
  const { name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament } = req.body;
  try {

    // Llamo a la función para validar los campos
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

    // Busco en la BD los temperamentos del perro
    const temperaments = await Temperaments.findAll({
      where: {
        name: {
          [Op.in]: temperament.map(temp => temp.toLowerCase())
        }
      }
    });

    await newDog.setTemperaments(temperaments);
    if(newDog) return res.status(201).json(`El perro ${newDog.name} fue creado`);
    throw new Error(`El perro ${newDog.name} no pudo crearse.`)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postDogs;
