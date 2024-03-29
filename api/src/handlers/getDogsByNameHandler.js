const getDogsByName = require("../controllers/getDogsByName");

const getDogsByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await getDogsByName(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getDogsByNameHandler;
