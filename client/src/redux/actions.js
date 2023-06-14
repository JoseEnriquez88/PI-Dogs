import { GET_ALL_DOGS } from './action-types';
import axios from 'axios';

export const getAllDogs = () => {
    const endpoint = 'http://localhost:3001/home';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            if (!data || data.length === 0) {
                throw new Error('No se encuentran perros para mostrar');
            }

            const dogs = data.map((dog) => ({
                id: dog.id,
                name: dog.name,
                image: dog.image,
                temperament: dog.temperament,
                weight: dog.weight,
            }));

            dispatch({ type: GET_ALL_DOGS, payload: dogs });
        } catch (error) {
            console.error("Error al obtener los perros", error);
        }
    };
};
