const { Dogs, Temperaments } = require('../db.js');
const { Op } = require('sequelize');

const postDogs = async (req, res) => {
    const { name, image, height, weight, life_span, temperament } = req.body;
    try {
        const newDog = await Dogs.create({
            name,
            image: image.url, 
            height: height.metric,
            weight: weight.metric,
            life_span,
        });

        const temperaments = await Temperaments.findAll({
            where: {
                name: {
                    [Op.in]: temperament.map(temp => temp.toLowerCase())
                }
            }
        });

        await newDog.setTemperaments(temperaments);

        return res.status(200).json(newDog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'There was an error creating new dog' });
    }
};

module.exports = postDogs;
