import { GET_ALL_DOGS, GET_DOGS_BY_NAME } from "./action-types";

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
        default:
            return { ...state };
    }
};

export default reducer;

