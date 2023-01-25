import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import React, {useState} from 'react';

import SegmentRow from './SegmentRow';

const segmentNames = ["Departure", "Return"];

export default function FlightRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.segments.at(0).legs.at(0).departurePoint.airportCode}
        </TableCell>
        <TableCell align="right">
          {row.segments.at(0).legs.at(-1).arrivalPoint.airportCode}
        </TableCell>
        <TableCell align="right">
          {row.averagePrice + row.currencySymbol}
        </TableCell>
      </TableRow>
      
      {/* Segments Row */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row.segments.map((segment, index) => (
              <SegmentRow key={index} segment={segment} segmentName={segmentNames[index]} />
            ))}
            {/* <SegmentRow segments={row.segments}/> */}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}