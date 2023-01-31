import { put } from "redux-saga/effects";
import { setFlights } from "../slices/flightsSlice";

export function* handleGetFlightsData() {
    try {
        const response = yield fetch('https://localhost:44359/api/flight/search');
        const data = yield response.json();
        yield put(setFlights(data));
    } catch(error) {
        console.log(error);
    }
}