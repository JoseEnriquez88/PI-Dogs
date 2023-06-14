import { GET_ALL_DOGS } from "./action-types";

const initialState = {
    breeds: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return{
                ...state,
                breeds: action.payload,
                error: null,
            };
    
        default:
            return{ ...state };
    }
};

export default reducer;