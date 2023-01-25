import { useState, useEffect, useRef } from 'react';

export default function FlightsFilter(props) {

    const { flights } = props;
    const { setFilteredFlights } = props;
    
    const uniqueAirlines = [...new Set(flights.flatMap(flight => flight.segments.flatMap(segment => segment.legs.map(leg => leg.airlineName))))];

    const [selectedAirlines, setSelectedAirlines] = useState([]);

    useEffect(() => {
        applyFilter();
    }, [selectedAirlines]);

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        if (selectedAirlines.includes(name)) {
            setSelectedAirlines(selectedAirlines.filter(airline => airline !== name));
        } else {
            setSelectedAirlines([...selectedAirlines, name]);
        }
    }

    const applyFilter = () => {
        const filteredFlights = flights.filter(flight =>
            flight.segments.some(segment =>
                segment.legs.some(leg =>
                    selectedAirlines.includes(leg.airlineName)
                )
            )
        );
        setFilteredFlights(filteredFlights);
    }

    return (
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
    );
}