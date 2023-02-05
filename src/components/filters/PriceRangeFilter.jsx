import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPriceRange } from '../../redux/slices/flightsSlice';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function PriceRangeFilter() {

    const handleRangeChange = (event, newValue) => {
        dispatch(setSelectedPriceRange(newValue));
    }

    function initiateFilter() {
        console.log("called filtering function from filter");
    }

    const dispatch = useDispatch();
    const uniquePrices = useSelector(state => state.flights.filterProps.uniquePrices);
    const selectedPriceRange = useSelector(state => state.flights.filterCriteria.selectedPriceRange);
    const minPrice = useSelector(state => state.flights.filterProps.minPrice);
    const maxPrice = useSelector(state => state.flights.filterProps.maxPrice);
    const marks = uniquePrices.map(price => {
        return {
            //label: price,
            value: price
        }
    });

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Price
            </Typography>
            <Box sx={{ padding: 2 }}>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={selectedPriceRange}
                    onChange={handleRangeChange}
                    onChangeCommitted={initiateFilter}
                    valueLabelDisplay="auto"
                    min={minPrice}
                    max={maxPrice}
                    step={null}
                    marks={marks}
                // getAriaValueText={valuetext}
                />
            </Box>
        </>
    );
}