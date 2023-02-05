import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import SegmentCard from './segmentCard';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function FlightCard({ flight }) {

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2} columns={{ xs: 1, md: 12}}>
                    <Grid xs={12} md={10}>
                        {flight.segments.map((segment, index) => (
                            <SegmentCard key={index} segment={segment} />
                        ))}
                    </Grid>
                    <Grid xs={12} md={2}>
                        <Box sx={{ height: '100%', display: 'flex',  flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h6" color="text.secondary" textAlign={'center'}>
                                Price:
                            </Typography>
                            <Typography variant="h4" color="text.secondary" textAlign={'center'}>
                                {flight.averagePrice + flight.currencySymbol}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}