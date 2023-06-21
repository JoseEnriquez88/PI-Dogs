import { GET_ALL_DOGS, GET_DOGS_BY_NAME, ORDER_DOGS, FILTER_DOGS } from './action-types';
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

export const getDogsByName = (name) => {
    const URL = 'http://localhost:3001/name';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}?name=${name}`);
            if (!data.find((dog) => dog.name === name)) throw new Error(`No se encuentra perro con en el nombre: ${name}`);

            const dogs = data.map((dog) => ({
                id: dog.id,
                name: dog.name,
                image: dog.image,
                temperament: dog.temperament,
                weight: dog.weight,
            }));

            dispatch({ type: GET_DOGS_BY_NAME, payload: dogs });
        } catch (error) {
            console.error({ error: error.message });
        }
    };
};

export const filterDogs = (breed_group) => {
    return { type: FILTER_DOGS, payload: breed_group };

};

export const orderDogs = (order) => {
    return { type: ORDER_DOGS, payload: order };
};
