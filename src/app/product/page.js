'use client'
import {useEffect, useState} from 'react';
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
import googleReviewButton from "../../Img/GoogleReviewCard.png"
import googleReviewButton2 from "../../Img/GoogleCustomCard.png"
import qrCode from "../../Img/qrCode.png"
import { Grid,FormControl,InputLabel,Select,MenuItem,TextField, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Head from 'next/head';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const images = [
  { src: googleReviewButton, alt: 'Image 1' },
  { src: qrCode, alt: 'Image 2' },
  { src: googleReviewButton2, alt: 'Image 3' },

];
const accordionData = [
  {
    question: 'Will my gift recipient be able to make changes to their profile?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  },
  {
    question: 'Does mTap work Internationally?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  },
  {
    question: 'Can I add a custom logo or job title to a gifted card?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  },
  {
    question: 'How does my gift recipient use their card?',
    answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
  }
];
const productData = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Google Review Cards",
  "image": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png",  // Replace with actual product image URL
  "description": "Elevate your Google Review strategy with the Google Review Cards component. Customize card colors, upload your business logo, and choose the card pack size that suits your needs.",
  "sku": "GRC12345",
  "brand": {
    "@type": "Brand",
    "name": "mTap"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://mtap.byklabs.store/product",  // Replace with actual product URL
    "priceCurrency": "USD",
    "price": "39.00",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "24"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "reviewBody": "This product is excellent!"
    }
  ]
};

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(images[0]);

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

  
    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };
    const faqScript = `{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${accordionData.map((item, index) => `{
          "@type": "Question",
          "name": "${item.question}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${item.answer.replace(/"/g, '\\"')}"
          }
        }`).join(',\n')}
      ]
    }`;
  
    // const faqJsonLD = JSON.stringify(faqSchema);
    useEffect(() => {
      const existingProductScript = document.getElementById('product-schema');
      if (existingProductScript) {
        existingProductScript.text = JSON.stringify(productData);
      } else {
        const productScript = document.createElement('script');
        productScript.id = 'product-schema';
        productScript.type = 'application/ld+json';
        productScript.text = JSON.stringify(productData);
        document.head.appendChild(productScript);
      }
  
      const existingFaqScript = document.getElementById('faq-schema');
      if (existingFaqScript) {
        existingFaqScript.text = faqScript;
      } else {
        const faqScriptElement = document.createElement('script');
        faqScriptElement.id = 'faq-schema';
        faqScriptElement.type = 'application/ld+json';
        faqScriptElement.text = faqScript;
        document.head.appendChild(faqScriptElement);
      }
  
      return () => {
        const productScriptToRemove = document.getElementById('product-schema');
        if (productScriptToRemove) {
          document.head.removeChild(productScriptToRemove);
        }
  
        const faqScriptToRemove = document.getElementById('faq-schema');
        if (faqScriptToRemove) {
          document.head.removeChild(faqScriptToRemove);
        }
      };
    }, []);
  return (
    <>
    <Head>
    <title>Google Review Cards</title>
    <meta property="og:site_name" content="mTap" />
   <meta name="description" content="Elevate your Google Review strategy with the Google Review Cards component. Customize card colors, upload your business logo, and choose the card pack size that suits your needs." />
    <meta property="og:image" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png" />
    <meta property="og:image:url" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-04/Google-Review-Card-01.png" />
    <meta name="keywords" content="product, ecommerce, User engagement, SEO-friendly, Customizable colors, Google Review Cards" />
  
    {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLD }} /> */}
    <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "mTap",
              "url": "https://mtap.byklabs.store/",
              "logo": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/mTapSocialImage.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Service"
              }
            })}
          </script>
  
  </Head>
    <Card sx={{marginTop:'12rem'}}>
        <h1  className="googleReviewCardsHeading" style={{fontSize:'80px', fontWeight:"900",textAlign:'center'}}>Google Review Cards</h1>

        
    <Card
    // className='CardContent'
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
        contain: 'content',
        '@media screen and (max-width: 768px)': {
         flexDirection:'column'
        }
      }}
    >
          <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>
        {images.map((image, index) => (
          <Box
          className="reviewCardSmallBox"
            key={index}
            sx={{
              width: 100,
              height: 80,
              marginBottom: '1rem',
              cursor: 'pointer',
              border: `2px solid ${selectedImage === image ? 'black' : '#ccc'}`, // Conditional border
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} alt={image.alt}  loading="eager" priority />
          </Box>
        ))}
      </Box>
      <CardOverflow
        variant="solid"
    
        sx={{
     width:'40vw',
          display: 'flex',
          background:"white",
        
        margin:'5rem',
          justifyContent: 'center',
          px: 'var(--Card-padding)',
          '@media screen and (max-width: 768px)': {
            width: '100%',
            margin: 0,
          }
        }}
      >
      {/* <Box
        sx={{
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.22)',
            border: '1px solid transparent',
            borderRadius: '38px', 
            overflow: 'hidden',  
          }}
      > */}
        <Image src={selectedImage.src} alt='reviewbutton'  loading="eager" width={700} height={400} priority />
        {/* <Image src={googleReviewButton} alt='reviewbutton'   loading="eager"  /> */}
      {/* </Box> */}
      </CardOverflow>
      </Box>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
      
        <CardContent >
      
          <Typography variant="h3"  gutterBottom style={{fontSize:"40px" ,fontWeight:"bold", color:"#00B4D8"}}>
            $39.00
          </Typography>
        
          <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
        
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
       <h2 style={{fontSize:'70px',fontWeight:'bold'}}>Description</h2>
       <Typography sx={{fontSize:'30px',width:'60vw',marginBottom:'5rem'}} className="DescriptionP">Want more reviews from happy customers? Just have them tap or scan the QR code and take them directly to your Google Review Profile. Get more positive feedback instantly. You do not have to do anything . We will configure the card for you with the Google Review link of your business. No Profile creation or any account management</Typography>
       </Box>
       <Box sx={{display:"flex" , flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}}>
            <h2 style={{fontSize:'70px',fontWeight:'bold',marginBottom:'1rem'}}>FAQ</h2>
            {accordionData.map((item, index) => (
        <Accordion key={index} defaultExpanded={index === 0} sx={{marginBottom:'2rem',padding:'2rem'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{fontSize :40}} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography sx={{fontSize:'30px', fontWeight:600}}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize:'30px'}}> 
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
       </Card>
    
       </>
  )
}

export default Product