import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import React from 'react';

export default function LegRow(props) {

    const { leg } = props;

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {leg.departurePoint.airportCode}
            </TableCell>
            <TableCell>{leg.arrivalPoint.airportCode}</TableCell>
            <TableCell align="right">{leg.airlineName}</TableCell>
            <TableCell align="right">{leg.flightNumber}</TableCell>
        </TableRow>
    );
}