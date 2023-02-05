import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const headers = [
    {
        label: 'Airline',
        size: 1
    },
    {
        label: 'Origin',
        size: 3
    },
    {
        label: 'Stops',
        size: 1
        
    },
    {
        label: 'Destination',
        size: 2
    },
    {
        label: 'Details',
        size: 2
    },
    {
        label: 'Price',
        size: 3
    }
];

export default function HeaderCard() {

    return (
        <Box mb={2} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        {headers.map((header, index) => (
                            <Grid key={index} sm={header.size} >
                                <Typography variant="h6" color="text.secondary" textAlign={'center'}>
                                    {header.label}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}