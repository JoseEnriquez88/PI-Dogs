const getApiData = require("./getApiData");

const getBreedsDogs = async () => {
  const dogBreeds = await getApiData();
  if (!dogBreeds || dogBreeds.length === 0)
    throw new Error("No se encontraron razas de perro.");
  const breeds = dogBreeds.map((dog) => ({ breed_group: dog.breed_group }));
  return breeds;
};

module.exports = getBreedsDogs;
