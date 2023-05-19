const { Dogs, Temperaments } = require('../db.js');

const postDogs = async (req, res) => {
    const { name, height, weight, life_span, temperament } = req.body;
    try { 
        const newDog = await Dogs.create({ // creo la raza de perro
            name,
            height,
            weight,
            life_span
        });

        const temperaments = await Temperaments.findAll({
            where: {
                name: {
                    [Op.in]: temperament.map(temp => temp.toLoweCase())
                }
            }
        });

        await newDog.setTemperaments(temperaments);

        return res.status(200).json(newDog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'There was an error creating the dog' });
    }
};

module.exports = postDogs;
