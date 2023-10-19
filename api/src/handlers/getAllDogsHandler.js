const getAllDogs = require("../controllers/getAllDogs");

const getAllDogsHandler = async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    if (!allDogs) throw new Error("No hay perros para mostrar");
    return res.status(200).json(allDogs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllDogsHandler;
