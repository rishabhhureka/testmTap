'use client'
import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Done from '@mui/icons-material/Done';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import googleReviewButton from "../../Img/googleReviewCard.svg"
import { Grid,FormControl,InputLabel,Select,MenuItem,TextField, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Head from 'next/head';
export default function Product() {
    // const [color, setColor] = React.useState('white');
    const [quantity, setQuantity] = React.useState(1);
    const [count, setCount] = React.useState(1);
    const images = [
        { src: googleReviewButton, alt: 'Image 1' },
        { src: googleReviewButton, alt: 'Image 2' },
        { src: googleReviewButton, alt: 'Image 3' },
        { src: googleReviewButton, alt: 'Image 4' },
      ];
      
    const [selectedImage, setSelectedImage] = React.useState(images[0]);
    const colors = [
        { name: 'danger', bgColor: 'danger.solidBg' },
  { name: 'white', bgColor: 'common.white' },
  { name: 'black', bgColor: 'common.black' },
  { name: 'primary', bgColor: 'primary.solidBg' },
      ];
     
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
    // const handleColorChange = (event) => {
    //   setColor(event.target.value);
    // };
  
    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };
  return (
    <>
    <Head>
    <title>Google Review Cards</title>
    <meta name="description" content="Elevate your Google Review strategy with the Google Review Cards component. Designed for seamless integration into your Next.js application, this component offers a visually appealing way to showcase customer reviews. Customize card colors, upload your business logo, and choose the card pack size that suits your needs. Engage customers effortlessly with a QR code linked to your Google Review profile. Boost positive feedback and simplify review management with this intuitive solution." />
    <meta name="keywords" content="product, ecommerce, User engagement, SEO-friendly, Customizable colors, Google Review Cards" />
  </Head>
    <Card sx={{marginTop:'10rem'}}>
        <Typography className="googleReviewCardsHeading" sx={{fontSize:'80px', fontWeight:"900",textAlign:'center'}}>Google Review Cards</Typography>
    <Card
    className='CardContent'
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        maxWidth: '100%',
        resize: 'horizontal',
        overflow: 'auto',
      }}
    >
          <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>
        {images.map((image, index) => (
          <Box
          className="reviewCardSmallBox"
            key={index}
            sx={{
              width: 80,
              height: 60,
              marginBottom: '1rem',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} alt={image.alt} layout="responsive" priority />
          </Box>
        ))}
      </Box>
    
      <CardOverflow
        variant="solid"
    className="googleReviewCardImage"
        sx={{
     width:'40vw',
          display: 'flex',
          background:"white",
        //   flexDirection: 'column',
        margin:'5rem',
          justifyContent: 'center',
          px: 'var(--Card-padding)',
        }}
      >
      <Box
        sx={{
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.22)',
            borderRadius: '38px', // Optional: To make the corners rounded
            overflow: 'hidden',  // Optional: To clip the image corners if borderRadius is used
          }}
      >
        <Image src={selectedImage.src} alt='reviewbutton'  />
      </Box>
      </CardOverflow>
      </Box>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
      
        <CardContent >
      
          <Typography variant="h3"  gutterBottom style={{fontSize:"40px" ,fontWeight:"bold", color:"#00B4D8"}}>
            $39.00
          </Typography>
        
          <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
          {/* <Box sx={{ resize: 'horizontal', overflow: 'auto', px: 2 }}> */}
      <FormLabel
        id="product-color-attribute"
        sx={{
          mb: 2.5,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'm',
          letterSpacing: '0.1em',
        }}
      >
        Card Color
      </FormLabel>
      <RadioGroup
      aria-labelledby="product-color-attribute"
      defaultValue="black"
      sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
    >
      {colors.map((color) => (
        <Sheet
          key={color.name}
          sx={{
            position: 'relative',
            width: 40,
            height: 40,
            flexShrink: 0,
            bgcolor: color.bgColor,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border:'2px solid black'
          }}
        >
          <Radio
            overlay
            variant="solid"
            // Do not pass the color prop for custom colors
            checkedIcon={<Done fontSize="xl2" />}
            value={color.name}
            slotProps={{
              input: { 'aria-label': color.name },
              radio: {
                sx: {
                  display: 'contents',
                  '--variant-borderWidth': '2px',
                 
                },
              },
            }}
            sx={{
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) => theme.vars.palette[color.name]?.[500] || theme.vars.palette.common[500],
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
              // Custom styles for white and black colors
              ...(color.name === 'white' && {
                color: 'common.white',
                '&.Mui-checked': {
                  color: 'common.white',
                },
              }),
              ...(color.name === 'black' && {
                color: 'common.black',
                '&.Mui-checked': {
                  color: 'common.black',
                },
              }),
            }}
          />
        </Sheet>
      ))}
    </RadioGroup>
      <br />
   
    {/* </Box> */}
            <TextField fullWidth label="Name of your Business" variant="outlined" margin="normal"  />
            <TextField fullWidth label="Address of your Business" variant="outlined" margin="normal" />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Select Card Pack</InputLabel>
              <Select value={quantity} onChange={handleQuantityChange} label="Select Card Pack">
                <MenuItem value={1}>Single Pack</MenuItem>
                <MenuItem value={5}>5-Pack</MenuItem>
                <MenuItem value={10}>10-Pack</MenuItem>
              </Select>
            </FormControl>
            <Box my={2}>
              <Button variant="outlined" component="label" fullWidth sx={{border:'1px solid grey' ,color:'grey'}}>
              <AddPhotoAlternateIcon sx={{ margin:'12px'}} />
                Upload Business Logo
                <input type="file" hidden />
              </Button>
                </Box>
                <Box display="flex" alignItems="center" border={1} borderRadius={10} padding={1} sx={{width:'fit-content',marginTop:'2rem',marginBottom:'2rem'}}>
      <IconButton onClick={handleDecrement} aria-label="decrement">
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" mx={4} sx={{fontSize:'20px',fontWeight:"bold"}}>
        {count}
      </Typography>
      <IconButton onClick={handleIncrement} aria-label="increment">
        <AddIcon />
      </IconButton>
    </Box>
          </Grid>
        </Grid>
        </CardContent>
        <Button
        className='AddToCartButton'
         
          sx={{
            '--variant-borderWidth': '2px',
            borderRadius: 10,
        width:'25vw',
        padding:'1rem',
            mx: 'auto',
             backgroundColor:"#00B4D8"
          }}
     
        >
         ADD TO CART
        </Button>
      </CardContent>
      </Card>
      <Box sx={{display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'}}>
       <Typography sx={{fontSize:'70px',fontWeight:'bold'}}>Description</Typography>
       <Typography sx={{fontSize:'30px',width:'60vw',marginBottom:'5rem'}} className="DescriptionP">Want more reviews from happy customers? Just have them tap or scan the QR code and take them directly to your Google Review Profile. Get more positive feedback instantly. You do not have to do anything . We will configure the card for you with the Google Review link of your business. No Profile creation or any account management</Typography>
       </Box>
       </Card>
       </>
  );
}
