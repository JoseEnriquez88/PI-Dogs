const postDogs = require('../controllers/postDogs')

const postDogsHandler = async (req, res) => {
    const { name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament } = req.body;
    try {
        const createdDOgs = await postDogs(name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament);
        return res.status(201).json({ message }); 
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = postDogsHandler;