//!form validation para postDogs.js

const nameRegex = /^[A-Za-z\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
const lifeSpanRegex = /^\d+-\d+$/;

const formValidation = (name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament) => {
    //valido que tenga nombre
    if(!nameRegex.test(name)) throw new Error('El perro requiere de un nombre sin números.');

    //valido que la imagen sea jpg, jpeg o png
    if(!imageRegex.test(image) || !imageRegexURL.test(image)) 
    throw new Error('La imagen debe ser una URL válida o imagen con formato jpg, jpeg o png');

    //valido que las sigueintes caracteristicas sean numeros
    if([minHeight, maxHeight, minWeight, maxWeight].some(data => isNaN(data) || data === 0)) 
        throw new Error('height, weight y life span tienen que ser números distintos a 0.');

    //valido que el promedio de estatura este correctamente escrito
    if(minHeight > maxHeight) throw new Error('La estatura mínima no puede ser mayor a la estatura máxima');

    //valido que el promedio de peso este correctamente escrito
    if(minWeight > maxWeight) throw new Error('el peso mínimo no puede ser mayor al peso máximo');

    //valido la esparanza de vida del perro
    // if(!lifeSpanRegex.test(life_span)) throw new Error('la esperanza de vida debe ser por ejemplo: 10 - 15 años');

    //valido que el perro contenga temperamento
    if(temperament.length === 0) throw new Error('El perro debe poseer al menos un temperamento.');
};

module.exports = {
    formValidation
};
