//obtiene los perros de la api y de la base de datos
const getApiData = require("./getApiData");
const getDogsDB = require("./getDogsDB");

const getAllDogs = async () => {
  const dataAPI = await getApiData();
  const dataDB = await getDogsDB();

  const dogsAPI = dataAPI.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    temperament: dog.temperament,
    weight: dog.weight.metric,
  }));

  const dogsDB = dataDB.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    temperament: dog.temperament,
    weight: dog.weight.metric,
  }));
  const dogs = [...dogsAPI, ...dogsDB];
  return dogs;
};

module.exports = getAllDogs;
