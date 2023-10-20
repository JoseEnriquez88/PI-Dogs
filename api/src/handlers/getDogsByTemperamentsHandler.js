const getDogsByTemperaments = require("../controllers/getDogsByTemperaments");

const getDogsByTemperamentsHandler = async (req, res) => {
  try {
    const temperaments = await getDogsByTemperaments();
    const savedTemperaments = await saveTemperamentsToDB(temperaments);
    return res.status(200).json(savedTemperaments);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getDogsByTemperamentsHandler;
