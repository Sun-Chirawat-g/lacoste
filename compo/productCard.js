import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from '@mui/material';
import { Button } from '@mui/material';



export default function productCard() {

    const cardArr =
        [
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },

        ]

    const listCard = cardArr.map((e, index) =>


        <Grid xs={1} sm={2} md={3} key={index}>


            <Card sx={{ maxWidth: 400, height: 320, boxShadow: 0, mb: 2 }}>
                <CardMedia
                    sx={{ height: 200, backgroundColor: "#EBEBEB" }}
                    image={e.img}
                />
                <CardContent>
                    <Typography mb={1} variant="body1" component="div" >
                        {e.title}
                    </Typography>
                    <Button variant="contained" href="/product"  sx={{
                        fontSize: 8,
                        backgroundColor: '#333',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                    }}>
                        New
                    </Button>
                    <Typography variant="body2" mt={0.5} >
                        <Link color={"#7E7E7E"}>{e.color}+color</Link>
                    </Typography>


                </CardContent>
                <CardActions>
                    {/* <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </Grid>

    )


    return (
        <>
            {listCard}
        </>

    )
}