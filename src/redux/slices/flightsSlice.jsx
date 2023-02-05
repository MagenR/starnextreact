import { createSlice } from "@reduxjs/toolkit";

const flightsSlice = createSlice({
    name: "flights",
    initialState: {
        flights: [],
        filteredFlights: [],
        filterProps: {
            uniqueAirlineNames: [],
            uniquePrices: [],
            uniqueLegsCount: [],
            minPrice: Infinity,
            maxPrice: -Infinity
        },
        filterCriteria: {
            selectedAirlineNames: [],
            selectedPriceRange: [],
            selectedLegsCount: [],
        }
    },
    reducers: {
        setFlights(state, action) {
            state.flights = action.payload;

            state.filterProps.uniqueAirlineNames = [...new Set(state.flights.flatMap(flight =>
                flight.segments.flatMap(segment =>
                    segment.legs.map(leg =>
                        leg.airlineName)
                )
            ))];

            state.filterProps.uniquePrices = [...new Set(state.flights.map(flight =>
                flight.averagePrice
            ))];

            state.filterProps.uniqueLegsCount = [...new Set(state.flights.flatMap(flight =>
                flight.segments.flatMap(segment =>
                    segment.legs.length
                )
            ))];

            state.filterProps.minPrice = Math.min(...state.filterProps.uniquePrices);
            state.filterProps.maxPrice = Math.max(...state.filterProps.uniquePrices);

            state.filteredFlights = state.flights;

            state.filterCriteria.selectedPriceRange = [state.filterProps.minPrice, state.filterProps.maxPrice];
        },
        setFilteredFlights(state, action) {
            state.filteredFlights = action.payload;
            console.log( state.filteredFlights );
        },
        setSelectedAirlineNames(state, action) {
            state.filterCriteria.selectedAirlineNames = action.payload;
        },
        setSelectedLegCount(state, action) {
            state.filterCriteria.selectedLegsCount = action.payload;
        },
        setSelectedPriceRange(state, action) {
            state.filterCriteria.selectedPriceRange = action.payload;
        }
    }
});

export const {
    setFlights,
    setFilteredFlights,
    setSelectedAirlineNames,
    setSelectedLegCount,
    setSelectedPriceRange
} = flightsSlice.actions;

export default flightsSlice.reducer;