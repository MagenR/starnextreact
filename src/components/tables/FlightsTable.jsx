import React, { useState, useEffect } from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

import FlightRow from './FlightRow';

export default function FlightsTable({flights}) {
  //const {flights} = props;

  return (
    <>
      {/* <FlightsFilter flights={flights} /> */}

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Origin</TableCell>
              <TableCell align="right">Destination</TableCell>
              <TableCell align="right">Average Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight) => (
              <FlightRow key={flight.id} row={flight} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}