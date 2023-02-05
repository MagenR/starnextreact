import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import FlightIcon from '@mui/icons-material/Flight';
import LegCard from './LegCard';

import convertDate from '../dateFuncs';

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

export default function SegmentCard({ segment }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // function convertDate(dateString) {
    //     let formattedDate = new Date(dateString).toLocaleString();
    //     return formattedDate;
    // }

    const Stops = segment.legs.length;

    return (
        <Card sx={{ border: "none", boxShadow: "none" }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid xs={1}>
                        <Typography variant="body2" color="text.secondary">
                            {segment.legs.at(0).airlineName}
                        </Typography>
                    </Grid>
                    <Grid xs={3} textAlign={'right'}>
                        <Typography  >
                            {segment.legs.at(0).departurePoint.airportCode}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {convertDate(segment.legs.at(0).departurePoint.dateTime)}
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Divider variant="middle" color="text.secondary">
                            <FlightIcon />
                        </Divider>
                        <Typography variant="body2" color="text.secondary" textAlign={'center'} mt={2}>
                            {Stops > 1 ? Stops - 1 + " Stops" : "No stops"}
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Typography >
                            {segment.legs.at(-1).arrivalPoint.airportCode}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {convertDate(segment.legs.at(-1).arrivalPoint.dateTime)}
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        {Stops > 1 &&
                            <>
                                <Typography variant="body2" color="text.secondary">
                                    {!expanded ? "Expand to show trip" : "Close trip details"}
                                </Typography>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </>
                        }
                    </Grid>
                </Grid>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {segment.legs.map((leg, index) => (
                        <LegCard key={index} leg={leg} />
                    ))}
                </CardContent>
            </Collapse>

        </Card>
    );
}