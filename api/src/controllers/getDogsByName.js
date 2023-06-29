const getApiData = require('./getApiData');
const getDogsDB = require('../controllers/getDogsDB'); 

const getBreedsDogsByName = async (name) => {
  const apiDogs = await getApiData();
  const DBDogs = await getDogsDB();
  const allDogs = [...apiDogs, ...DBDogs];

  if(name){
    let filterDogs = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
    if(filterDogs.length) return filterDogs;
    throw new Error(`No se encontró la raza de perro con el nombre: ${name}`);
  }else{
    return allDogs;
  }
};

module.exports = getBreedsDogsByName;
