const getDogsByTemperaments = require('../controllers/getDogsByTemperaments');

const getDogsByTemperamentsHandler = async (req, res) => {
    const { temperament } = req.body;
    try {
        const temperamentos = await getDogsByTemperaments(temperament);
        return res.status(200).json(temperamentos);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getDogsByTemperamentsHandler;