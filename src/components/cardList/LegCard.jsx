import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

export default function LegCard({ leg }) {

    function convertDate(dateString) {
        let formattedDate = new Date(dateString).toLocaleString();
        return formattedDate;
    }

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid xs={1}>
                        <Typography variant="body2" color="text.secondary">
                            {leg.airlineName}
                        </Typography>
                    </Grid>
                    <Grid xs={4} textAlign={'right'}>
                        <Typography  >
                            {leg.departurePoint.airportCode}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {convertDate(leg.departurePoint.dateTime)}
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Divider variant="middle" color="text.secondary">
                        <ConnectingAirportsIcon />
                        </Divider>
                    </Grid>
                    <Grid xs={4}>
                        <Typography >
                            {leg.arrivalPoint.airportCode}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {convertDate(leg.arrivalPoint.dateTime)}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}