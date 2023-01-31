import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const headers = ['Airline', 'Origin', 'Destination', 'Price'];

export default function HeaderCard() {

    return (
        <Box mb={2}>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        {headers.map((header, index) => (
                            <Grid key={index} xs={index < 3 ? 2 : 6} >
                                <Typography variant="h6" color="text.secondary" textAlign={'center'}>
                                    {header}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}