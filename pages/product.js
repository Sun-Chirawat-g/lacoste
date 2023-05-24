import * as React from 'react';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Products from '../compo/productCard'

export default function Product() {
    return (
        <>
            <Box sx={{ height: 100 }}>
            </Box>
            <Container maxWidth="xl">
                <Box mb={12} mt={12}>
                    <Typography id={'header'} color="initial">
                        LTE
                    </Typography>

                    <Typography id={'sub'} color="initial">
                        At the crossroads of fashion and sport,
                        Active sneakers blend codes and connect worlds. Hybrid silhouettes that reveal the Crocodile's full creativity.
                        specimen book.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Products />
                </Grid>
            </Container>

        </>
    )
}