import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function FlightsFilter(props) {

    const { flights } = props;
    const { setFilteredFlights } = props;

    const uniqueAirlines = [...new Set(flights.flatMap(flight => flight.segments.flatMap(segment => segment.legs.map(leg => leg.airlineName))))];
    
    const uniquePrices = [...new Set(flights.map(flight => flight.averagePrice))];
    const minPrice = Math.min(...uniquePrices);
    const maxPrice = Math.max(...uniquePrices);
    const marks = uniquePrices.map(price => {
        return {
            label: price,
            value: price
        }
    });

    const uniqueLegs = [...new Set(flights.flatMap(flight =>
        flight.segments.flatMap(segment => segment.legs.length)
    ))];
    
    const [selectedAirlines, setSelectedAirlines] = useState(() => {
        return uniqueAirlines
    });
    const [priceRange, setPriceRange] = useState(() => {
        return [minPrice, maxPrice]
    });
    const [selectedLegs, setSelectedLegs] = useState(() => {
        return [...uniqueLegs, 0];
    });

    useEffect(() => {
        console.log("filter applied");
        applyFilter();
    }, [selectedAirlines, selectedLegs]);

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        if (selectedAirlines.includes(name)) {
            setSelectedAirlines(selectedAirlines.filter(airline => airline !== name));
        } else {
            setSelectedAirlines([...selectedAirlines, name]);
        }
    }

    const handleLegCheckboxChange = (event) => {
        const { name } = event.target;
        //console.log(name);
        if (selectedLegs.includes(parseInt(name))) {
            setSelectedLegs(selectedLegs.filter(leg => leg !== parseInt(name)));
        } else {
            setSelectedLegs([...selectedLegs, parseInt(name)]);
        }
    }


    // const handlePriceRangeChange = (event) => {
    //     const { value } = event.target;
    //     setPriceRange(value.split("-").map(Number));
    // }

    // const handleRangeChange = (event) => {
    //     const { value } = event.target;
    //     setPriceRange({
    //         min: value[0],
    //         max: value[1]
    //     });
    // }
    const handleRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    }

    // --------------------------------------------------------------------------------------------
    // Filter the results and update the list to render.
    // --------------------------------------------------------------------------------------------
    const applyFilter = () => {

        // Filter by airline names.
        let filteredFlights = flights.filter(flight =>
            flight.segments.every(segment =>
                segment.legs.every(leg =>
                    selectedAirlines.includes(leg.airlineName)
                )
            )
        );
        
        // Filter by price range.
        filteredFlights = filteredFlights.filter(flight =>
            flight.averagePrice >= priceRange[0] &&
            flight.averagePrice <= priceRange[1]);

            console.log(selectedLegs);

        // Filter by price Legs.
        filteredFlights = filteredFlights.filter(flight =>
            flight.segments.every(segment =>
                selectedLegs.includes(segment.legs.length)
            )
        );

        setFilteredFlights(filteredFlights);
    }

    return (
        <div>
            {/* Airline Filter */}
            <div>
                {uniqueAirlines.map(airline => (
                    <div key={airline}>
                        <input
                            type="checkbox"
                            name={airline}
                            checked={selectedAirlines.includes(airline)}
                            onChange={handleCheckboxChange}
                        />
                        <label>{airline}</label>
                    </div>
                ))}
            </div>
            {/* Price Filter */}
            <div>
                <Box sx={{ padding: 10 }}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        onChange={handleRangeChange}
                        onChangeCommitted={applyFilter}
                        valueLabelDisplay="auto"
                        min={minPrice}
                        max={maxPrice}
                        step={null}
                        marks={marks}
                    // getAriaValueText={valuetext}
                    />
                </Box>
            </div>
            {/* Number of Max Legs Filter */}
            <div>
                {uniqueLegs.map(leg => (
                    <div key={leg}>
                        <input
                            type="checkbox"
                            name={leg}
                            checked={selectedLegs.includes(leg)}
                            onChange={handleLegCheckboxChange}
                        />
                        <label>{leg}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}