import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';

export default function CheckBoxList({ headline, setSelectionList, selectionList, choiceList, itemType }) {

    // Convert item for given type to be stored in list.
    function convertItem(item) {
        if(itemType == 'Int')
            return parseInt(item);
        return item;
    }

    // When checkbox is checked/unchecked.
    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        let chosenItem = convertItem(name);
        if (selectionList.includes(chosenItem))
            setSelectionList(selectionList.filter(item => item !== chosenItem));
        else
            setSelectionList([...selectionList, chosenItem]);
    }

    // useEffect(() => { 
    //     console.log(selectionList);
    //     console.log(choiceList);
    // });

    return (
        <>
            <Typography variant="h5" gutterBottom>
                {headline}
            </Typography>
            {choiceList.map(item => (
                <div key={item}>
                    <input
                        type="checkbox"
                        name={item}
                        //checked={selectedAirlines.includes(airline)}
                        onChange={handleCheckboxChange}
                    />
                    <label>{item}</label>
                </div>
            ))}
        </>
    );
}