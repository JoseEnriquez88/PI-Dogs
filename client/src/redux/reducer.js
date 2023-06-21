import { GET_ALL_DOGS, GET_DOGS_BY_NAME, ORDER_DOGS, FILTER_DOGS } from "./action-types";

const initialState = {
    breeds: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                breeds: action.payload,
                error: null,
            };

        case GET_DOGS_BY_NAME:
            return {
                ...state,
                breeds: action.payload,
                error: null,
            }

        case ORDER_DOGS:
            const orderedDogs = [...state, breeds];
            return {
                ...state,
                breeds:
                    action.payload === 'A'
                        ? orderedDogs.sort((a, b) => a.id - b.id)
                        : orderedDogs.sort((a, b) => b.id - a.id)
            };

        case FILTER_DOGS:
            const filteredDogs = payload === 'Temperamentos'
            ? state.breeds.filter(dog => dog.temperament === payload)
            : payload === 'API'
            ? state.breeds.filter()
            return {
                ...state,
                breeds:
                    payload === 'dogs'
                        ? [...state.breeds]
                        : filteredDogs
            };

        default:
            return { ...state };
    }
};

export default reducer;

