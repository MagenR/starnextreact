import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAirlineNames } from '../../redux/slices/flightsSlice';
import CheckBoxList from "../CheckBoxList";

export default function AirlineNamesFilter() {

    function updateSelectedAirlineNames(selectedAirlineNames) {
        dispatch(setSelectedAirlineNames(selectedAirlineNames));
    }

    const dispatch = useDispatch();
    const uniqueAirlineNames = useSelector(state => state.flights.filterProps.uniqueAirlineNames);
    const selectedAirlineNames = useSelector(state => state.flights.filterCriteria.selectedAirlineNames);
    
    return (
        <>
            <CheckBoxList 
                headline = {'Airline names'}
                setSelectionList = {updateSelectedAirlineNames}
                selectionList = {selectedAirlineNames}
                choiceList = {uniqueAirlineNames}
                itemType = {'Text'}
                />
        </>
    );
}