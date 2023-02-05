import React, { useState } from 'react';
import FlightCard from './flightCard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const cardsToShow = 3;
export default function FlightsCardList({ flights }) {

    const [amountToShow, setAmountToShow] = useState(cardsToShow);

    function loadMoreFlights() {
        setAmountToShow((prevState) => prevState + cardsToShow);
    }

    return (
        <>
            {flights.slice(0, amountToShow).map((flight, index) => (
                <Box key={index} mb={2}>
                    <FlightCard key={flight.id} flight={flight} />
                </Box>
            ))}

            {
                amountToShow < flights.length &&
                <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={2}>
                    <Button
                        variant="contained"
                        onClick={loadMoreFlights}
                    >
                        Load More
                    </Button>
                </Box>
            }
        </>
    );
}