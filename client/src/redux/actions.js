import axios from 'axios';
import { GET_ALL_DOGS, GET_DOGS_BY_NAME, GET_DOGS_BY_ID } from "./action-types";

const URL = 'https://api.thedogapi.com/v1/breeds';

export const getAllDogs = () => {
    return (dispatch) => {
        axios.get(URL)
            .then(response => {
                const data = response.data.map(dog => ({
                    image: dog.image.url,
                    name: dog.name
                }));
                dispatch({
                    type: GET_ALL_DOGS,
                    payload: data,
                });
            })
            .catch(error => {
                console.error(error);
            });
    };
};

export const getDogsByName = (name) => {
    return (dispatch) => {
        axios.get(`${URL}/search?q=${name}`)
            .then(response => response.data)
            .then(data => {
                dispatch({
                    type: GET_DOGS_BY_NAME,
                    payload: data,
                });
            })
            .catch(error => {
                console.error(error);
            });
    };
};

export const getDogById = (id) => {
    return (dispatch) => {
        axios.get(`${URL}/${id}`)
            .then(response => response.data)
            .then(data => {
                const mappedData = {
                    image: data.image.url,
                    name: data.name
                };
                dispatch({
                    type: GET_DOGS_BY_ID,
                    payload: mappedData,
                });
            })
            .catch(error => {
                console.error(error);
            });
    };
};

