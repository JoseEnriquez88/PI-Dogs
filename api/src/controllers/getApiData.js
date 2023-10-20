const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";

const getApiData = async () => {
  const response = (await axios.get(URL)).data;
  const apiDogs = response.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image?.url,
      temperament: dog.temperament?.split(", "),
      weight: dog.weight?.metric,
      height: dog.height?.metric,
      life_span: dog.life_span,
      bred_for: dog.bred_for,
      breed_group: dog.breed_group,
      origin: dog.origin,
    };
  });
  return apiDogs;
};

module.exports = getApiData;
