const getApiData = require('./getApiData');
const { Temperaments } = require('../db.js');

const getDogsByTemperaments = async (req, res) => {
    try {
        //verifico si existen los temperamentos en la BD
        const existingTemperaments = await Temperaments.findAll();
        
        console.log(existingTemperaments);
        if(existingTemperaments.length === 0) throw new Error('No existing temperaments found');

        //obtengo los temperamentos de la API
        const response = await getApiData();
        console.log(response);
        if(!response || !response.data){
            console.log('API response or response data is missing');
            throw new Error('Error getting dog by temperament');
        }

        const apiTemperaments = response.data;
        console.log(apiTemperaments);

        //aca guardo los temperamentos en la BD
        const saveTemperaments = await Promise.all(
            apiTemperaments.map((temperament) => Temperaments.create({ name: temperament }))
        );
        console.log(saveTemperaments);
        return res.status(200).json(saveTemperaments);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = getDogsByTemperaments;