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
import Pcard from '../compo/card'
import { useState } from "react";


//  // state variable
//  const [Product, setProduct] = useState("");

// // state variable to hide/show add and edit dialogs
// const [addHidden, setAddHidden] = useState(true);
// const [editHidden, setEditHidden] = useState(true);

// // state variable for new item
// const [newFruit, setNewFruit] = useState('');

// // state variable to keep selected fruit index in array and fruit name
// const [fruitIndex, setFruitIndex] = useState(0);
// const [editFruitName, setEditFruitName] = useState('');

// // ========== Delete item ===========
// const deleteFruit = (id) => {
//   const newProduct = Product.filter((product) => fruit.id !== id);
//   setProduct(newProduct);
// }

// // ========== Add item ===========
// const addFruit = () => {
//   // console.log(newFruit);
//   // clone fruit array
//   let newProduct = [...Product];
//   // create object of new fruit
//   const item = { name: newFruit, image: 'apple.png', id: newProduct.length + 101 };
//   // add new item to array
//   newProduct.push(item);

//   // const test = [...Product, {name: newFruit, image: 'apple.png', id: newProduct.length + 101}];
//   // update state
//   setProduct(newProduct);
//   setNewFruit('');
// }

// // ========== Prepare to Edit item ===========
// const beforeEdit = (index, fruitName) => {
//   setEditHidden(!editHidden);
//   setFruitIndex(index);
//   setEditFruitName(fruitName);
// }

// // ========== Edit item ===========
// const editFruit = () => {
//   let newProduct = [...Product];
//   newProduct[fruitIndex].name = editFruitName;
//   setProduct(newProduct);
//   setEditHidden(true);
// }





export default function Home() {
  return (
    <>
      <Box sx={{ height: 100 }}>
      </Box>
      <Box sx={{
        height: 700, width: '100%',
        backgroundImage: `url(Hero.jpg)`,
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: 0.8,
        justifyContent: 'center'
      }}>
        <Box align={"center"}>
          <Typography id={"head"} color="white" align='center' pt={30}>New in</Typography>
          <Typography mb={2} variant="body1" color="white" align='center'>At the crossroads of fashion and sport,
            Active sneakers blend codes and connect worlds. Hybrid silhouettes that reveal the Crocodile's full creativity.
            specimen book. </Typography>
          <Button variant="contained" href="/product" size="large" sx={{
            fontSize: 24,
            backgroundColor: '#000',
            '&:hover': {
              backgroundColor: '#004526',
            },
          }}>
            Let's go
          </Button>
        </Box>


      </Box>
      <Box align={"center"} mb={10}>

      </Box>
      <Box>
        <Grid container spacing={0}>


          <Grid md={6} sx={{
            backgroundColor: "green", height: 700, width: '100%',
            backgroundImage: `url(content1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>

          </Grid>
          <Grid md={6}>
            <Container maxWidth="md">

              <Grid container spacing={2}>
                <Pcard />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: 100 }}>
      </Box>
      <Box>
        <Grid container spacing={0}>



          <Grid md={6}>
            <Container maxWidth="md">

              <Grid container spacing={2}>
                <Pcard />
              </Grid>
            </Container>
          </Grid>
          <Grid md={6} sx={{
            backgroundColor: "green", height: 700, width: '100%',
            backgroundImage: `url(cont2.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>

          </Grid>
        </Grid>
      </Box>
    </>


  )
}
