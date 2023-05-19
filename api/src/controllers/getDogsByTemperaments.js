const getApiData = require('./getApiData');
const { Temperaments } = require('../db.js');

const getDogsByTemperaments = async (req, res) => {
    
    try {
        //primero verifico si existen los temperamentos en la BD
        const existingTemperaments = await Temperaments.findAdll();
        if(existingTemperaments.length > 0) return res.status(200).json(existingTemperaments);

        //Obtengo los temperamentos de la API
        const response = await getApiData();
        const apiTemperaments = response.data;

        //Aca guardo los temperamentos en la BD
        const saveTemperaments = await Promise.all(
            apiTemperaments.map((temperament) => Temperaments.create({ name: temperament }))
        );
        return res.json(saveTemperaments);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error getting dog by temperament' });
    }
};

module.exports = getDogsByTemperaments;