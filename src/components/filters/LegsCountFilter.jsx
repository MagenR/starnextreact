import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedLegCount } from '../../redux/slices/flightsSlice';
import CheckBoxList from "../CheckBoxList";

export default function LegsCountFilter() {

    function updateSelectedLegCount(selectedLegCount) {
        dispatch(setSelectedLegCount(selectedLegCount));
    }

    const dispatch = useDispatch();
    const uniqueLegsCount = useSelector(state => state.flights.filterProps.uniqueLegsCount);
    const selectedLegCount = useSelector(state => state.flights.filterCriteria.selectedLegsCount);

    return (
        <>
            <CheckBoxList 
                headline = {'Legs count'}
                setSelectionList = {updateSelectedLegCount}
                selectionList = {selectedLegCount}
                choiceList = {uniqueLegsCount}
                itemType = {'Int'}
                />
        </>
    );
}