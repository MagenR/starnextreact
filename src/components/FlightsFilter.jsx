export default function flightsFilter(flights, filterCriteria, filterProps) {

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