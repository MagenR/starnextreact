import React from 'react';
import { useSelector } from 'react-redux';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// import FlightsTable from "../components/tables/FlightsTable";
import FilterPane from '../components/filters/filterPane';
import HeaderCard from '../components/cardList/tableHeaderCard';
import FlightsCardList from '../components/cardList/cardList';

import '../App.css';

const PageContainer = styled(Paper)({
    padding: 20,
    backgroundColor: '#dadada'
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'sticky'
}));

export default function Flights() {

    const filteredFlights = useSelector(state => state.flights.filteredFlights);

    return (
        <PageContainer>
            <Grid container spacing={2}>
                <Grid xs={12} md={2}>
                    <Item className="filterPane">
                        <FilterPane />
                    </Item>
                </Grid>
                <Grid xs={12} md={10}>
                    <HeaderCard />
                    {/* <FlightsTable flights={filteredFlights} /> */}
                    <FlightsCardList flights={filteredFlights} />
                </Grid>
            </Grid>
        </PageContainer>
        // <div className="PageContainer">
        //     <div className="filterPane">
        //         <FilterPane />
        //     </div>
        //     <div>
        //         <HeaderCard />
        //         {/* <FlightsTable flights={filteredFlights} /> */}
        //         <FlightsCardList flights={filteredFlights} />
        //     </div>
        // </div>
    );
}