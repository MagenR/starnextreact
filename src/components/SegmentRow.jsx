import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';

import LegRow from './LegRow';

import React, {useEffect} from 'react';

export default function SegmentRow(props) {

    const { segment } = props;
    const { segmentName } = props;
    // const [open, setOpen] = useState(false);
    
    // useEffect(() => {
    //     console.log(segmentName);
    // }, [segmentName]);

    return(
        <Box sx={{ margin: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
            {segmentName} Route
        </Typography>
        <Table size="small" aria-label="purchases">
          <TableHead>
            <TableRow>
              <TableCell>Origin</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell align="right">Airline Name</TableCell>
              <TableCell align="right">Flight Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {segment.legs.map((leg, index) => (
                <LegRow key={index} leg={leg} />
            ))}
          </TableBody>
        </Table>
      </Box>
    );
}