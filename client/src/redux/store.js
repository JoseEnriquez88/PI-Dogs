import { createStore, applyMiddleware, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Conecta con la extension del navegador REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware)) //Esta linea nos permite hacer peticiones a un servidor
    
);


export default store;
