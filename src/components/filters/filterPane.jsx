import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import flightsFilter from "../FlightsFilter";
import { setFilteredFlights } from "../../redux/slices/flightsSlice";

import AirlineNamesFilter from "./AirlineNamesFilter";
import LegsCountFilter from "./LegsCountFilter";
import PriceRangeFilter from "./PriceRangeFilter";

export default function FilterPane() {

    const dispatch = useDispatch();
    const flights = useSelector(state => state.flights.flights);
    const filterCriteria = useSelector(state => state.flights.filterCriteria);
    const filterProps = useSelector(state => state.flights.filterProps);

    function applyFilter() {
        const filteredList = flightsFilter(flights, filterCriteria, filterProps)
        dispatch(setFilteredFlights(filteredList));
    }

    useEffect(() => {
        applyFilter();
    }, [filterCriteria])

    return (
        <>
            <Box mb={2}>
                <AirlineNamesFilter />
            </Box>
            <Divider />
            <Box my={2}>
                <LegsCountFilter />
            </Box>
            <Divider />
            <Box mt={2}>
                <PriceRangeFilter />
            </Box>
        </>
    );
}