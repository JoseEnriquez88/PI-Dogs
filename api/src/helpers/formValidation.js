const nameRegex = /^[A-Za-z\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
const lifeSpanRegex = /^\d+-\d+$/;

const formValidation = (
  name,
  image,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  life_span,
  temperament
) => {
  if (!nameRegex.test(name))
    throw new Error("El perro requiere de un nombre sin números.");
  if (name.lengh <= 0)
    throw new Error(
      "El nombre del perro no puede estar vacío. Por favor, proporciona un nombre."
    );
  if (name.lengh > 25)
    throw new Error(
      "El Nombre del perro es muy largo. Proporcione un nombre menor a 25 caracteres"
    );

  if (!imageRegex.test(image) || !imageRegexURL.test(image))
    throw new Error(
      "La imagen debe ser una URL válida o imagen con formato jpg, jpeg o png"
    );

  if (minHeight > maxHeight)
    throw new Error(
      "La estatura mínima no puede ser mayor a la estatura máxima"
    );

  if (minWeight > maxWeight)
    throw new Error("el peso mínimo no puede ser mayor al peso máximo");

  // if(!lifeSpanRegex.test(life_span)) throw new Error('la esperanza de vida debe ser por ejemplo: 10 - 15 años');

  if (temperament.length === 0)
    throw new Error("El perro debe poseer al menos un temperamento.");
};

module.exports = formValidation;
