import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function LegRow({leg}) {

    // const { leg } = props;

    function convertDate(dateString) {
        let formattedDate = new Date(dateString).toLocaleString();
        return formattedDate;
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <Typography variant="body1">
                    {leg.departurePoint.airportCode}
                </Typography>
                <Typography variant="subtitle2">
                    {convertDate(leg.departurePoint.dateTime)}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="body1">
                    {leg.arrivalPoint.airportCode}
                </Typography>
                <Typography variant="subtitle2">
                    {convertDate(leg.arrivalPoint.dateTime)}
                </Typography>
            </TableCell>
            <TableCell align="right">{leg.airlineName}</TableCell>
            <TableCell align="right">{leg.flightNumber}</TableCell>
        </TableRow>
    );
}