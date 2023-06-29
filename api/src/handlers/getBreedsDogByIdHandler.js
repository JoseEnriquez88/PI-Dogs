const getBreedsDogById = require('../controllers/getBreedsDogsById');

const getBreedsDogByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getBreedsDogById(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getBreedsDogByIdHandler;