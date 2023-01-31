// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilteredFlights } from '../redux/slices/flightsSlice';


// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// //import Container from '@mui/material/Container';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     //textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// export default function applyFilter() {
//     const dispatch = useDispatch();
//     const updatedFlightsList = flightsFilter();

//     dispatch(setFilteredFlights(updatedFlightsList));
// }

export default function flightsFilter(flights, filterCriteria, filterProps) {

    // Import data to work with.
    // const flights = useSelector(state => state.flights.flights);
    // const filterCriteria = useSelector(state => state.flights.filterCriteria);
    // const filterProps = useSelector(state => state.flights.filterProps);

    // Spread data for shorter code.
    const selectedAirlineNames = filterCriteria.selectedAirlineNames;
    const selectedPriceRange = filterCriteria.selectedPriceRange;
    const selectedLegsCount = filterCriteria.selectedLegsCount;

    const uniqueAirlineNames = filterProps.uniqueAirlineNames;
    const uniqueLegsCount = filterProps.uniqueLegsCount;
    const minPrice = filterProps.minPrice;
    const maxPrice = filterProps.maxPrice;

    // Check if filters are applied, store in boolean variables.
    const allAirlines = selectedAirlineNames.length === 0 || selectedAirlineNames.length == uniqueAirlineNames;
    const allLegs = selectedLegsCount.length === 0 || selectedLegsCount.length == uniqueLegsCount;
    const fullPriceRange = (selectedPriceRange[0] === Infinity && selectedPriceRange[1] === -Infinity) ||
    (selectedPriceRange[0] === minPrice && selectedPriceRange[1] === maxPrice);

    // If not filter is applied or max filter is applied (everything), no need to filter, return original list.
    if(allAirlines && allLegs && fullPriceRange)
        return flights;

    // Filter the flights, return the new list.
    return flights.filter(flight =>
        flight.segments.every(segment =>
            (allAirlines || segment.legs.every(leg =>
                selectedAirlineNames.includes(leg.airlineName)) 
            ) && (allLegs ||
                selectedLegsCount.includes(segment.legs.length))
        ) && (fullPriceRange ||
        (flight.averagePrice >= selectedPriceRange[0] &&
            flight.averagePrice <= selectedPriceRange[1]))
    )
}

// const updateFilteredFlights = () => {
//     setFilteredFlights(applyFilter());
// }

// function isAirlineIncluded(leg) {
//     return selectedAirlines.includes(leg.airlineName);
// }

// function isLegIncluded(segment) {
//    return selectedLegs.includes(segment.legs.length); 
// }

// function IsInPriceRange(flight) {
//     return flight.averagePrice >= priceRange[0] && flight.averagePrice <= priceRange[1];
// }

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//                 {/* Airline Filter */}
//                 <Grid xs={12} md={8}>
//                     <Item>
                        
//                     </Item>
//                 </Grid>
//                 {/* Number of Max Legs Filter */}
//                 <Grid xs={12} md={4}>
//                     <Item>
                        
//                     </Item>
//                 </Grid>
//                 {/* Price Filter */}
//                 <Grid xs={12}>
//                     <Item>
                        
//                     </Item>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }