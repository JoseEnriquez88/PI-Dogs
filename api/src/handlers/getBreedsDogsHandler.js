const getBreedsDogs = require("../controllers/getBreedsDogs");

const getBreedsDogsHandler = async (req, res) => {
  try {
    const breedDogs = await getBreedsDogs();
    if (!breedDogs) throw new Error("No se encuentran razas de perros.");
    return res.status(200).json(breedDogs);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getBreedsDogsHandler;
