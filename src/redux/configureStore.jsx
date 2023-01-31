import { configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import flightsReducer from "../redux/slices/flightsSlice"
import { handleGetFlightsData } from "./sagas/flightsSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    flights : flightsReducer
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
        immutableCheck: false
    }), sagaMiddleware]
});

// Fetch the flights on store creation.
sagaMiddleware.run(handleGetFlightsData);

export default store;