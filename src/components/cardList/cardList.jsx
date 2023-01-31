import React, { useState, useEffect } from 'react';
import FlightCard from './flightCard';
import Box from '@mui/material/Box';

export default function FlightsCardList({ flights }) {
    //const {flights} = props;

    return (
        <>
            {/* <FlightsFilter flights={flights} /> */}
            {flights.map((flight, index) => (
                <Box key={index} mb={2}>
                    <FlightCard key={flight.id} flight={flight} />
                </Box>
            ))}

        </>
    );
}