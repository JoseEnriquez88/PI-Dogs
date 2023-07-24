import { GET_ALL_DOGS, GET_DOGS_BY_NAME, GET_DOGS_BY_ID } from "./action-types";

const initialState = {
    breeds: [],
    detail: [],
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

        case GET_DOGS_BY_ID:
            return {
                ...state,
                detail: action.payload,
            };
        default:
            return { ...state };
    }
};

export default reducer;
