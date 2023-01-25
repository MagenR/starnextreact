import { useState } from 'react';

export default function PriceFilter(props) {
    const { flights, setFilteredFlights } = props;
    const uniquePrices = [...new Set(flights.map(flight => flight.averagePrice))];
    const minPrice = Math.min(...uniquePrices);
    const maxPrice = Math.max(...uniquePrices);

    const [priceRange, setPriceRange] = useState({ min: minPrice, max: maxPrice });

    const handleRangeChange = (event) => {
        const { value } = event.target;
        setPriceRange({
            min: value[0],
            max: value[1]
        });
    }

    useEffect(() => {
        const filteredFlights = flights.filter(flight => flight.averagePrice >= priceRange.min && flight.averagePrice <= priceRange.max);
        setFilteredFlights(filteredFlights);
    }, [priceRange])

    return (
        <div>
            <label>Price Range:</label>
            <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={[priceRange.min, priceRange.max]}
                onChange={handleRangeChange}
            />
            <div>
                <span>{priceRange.min}</span>
                <span>{priceRange.max}</span>
            </div>
        </div>
    );
}