import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from '@mui/material';



export default function productCard() {

    const cardArr =
        [
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
            { img: 'p1.webp', title: 'lacoste', color: 4, price: '180-260' },
           
        ]

    const listCard = cardArr.map((e, index) =>
    
 
         <Grid  xs={1} sm={2} md={6} key={index}>
         
        
            <Card sx={{ maxWidth: 400 ,height:300 ,boxShadow: 0 ,mb:2}}>
                <CardMedia
                    sx={{ height: 200 , backgroundColor:"#EBEBEB"}}
                    image={e.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" >
                        {e.title} 
                    </Typography>
                    <Typography variant="body2" >
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