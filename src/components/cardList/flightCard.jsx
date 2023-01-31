import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import FlightIcon from '@mui/icons-material/Flight';
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
                <Grid container spacing={2}>
                    <Grid xs={9}>
                        {flight.segments.map((segment, index) => (
                            <SegmentCard key={index} segment={segment} />
                        ))}
                    </Grid>
                    <Grid xs={3}>
                        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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