import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

import FlightsTable from "../components/tables/FlightsTable";
import FilterPane from '../components/filters/filterPane';
// import FlightsFilter from '../components/FlightsFilter';

export default function Flights() {

    // const flights = useSelector(state => state.flights.Flights);
    const filteredFlights = useSelector(state => state.flights.filteredFlights);

    // const [flights, setFlights] = useState([]);
    // const [filteredFlights, setFilteredFlights] = useState([]);

    // useEffect(() => {
    //     console.log("fetch runs");
    //     // Fetch the flights from the API
    //     fetch('https://localhost:44359/api/flight/search')
    //         .then(response => response.json())
    //         .then(data => {
    //             setFlights(data);
    //         });
    // }, []);

//     <Typography variant="h3" sx={{ textAlign: 'center', padding: 2 }}>
//     Flight App
// </Typography>
// {/* <FlightsFilter flights={flights} setFilteredFlights={setFilteredFlights} /> */}
// <Typography variant="h4" sx={{ textAlign: 'center', padding: 2 }}>
//     Flights Table
// </Typography>

    return (
        <Container fixed>
            <FilterPane />
            <FlightsTable flights={filteredFlights} />
        </Container>
    );
}