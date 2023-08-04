import React from 'react'
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Box , Container } from '@mui/system';

const Footer =() => {
    const CustomContainer = styled(Container)(({theme})=>({
        display:'flex',
        justifyContent:'space-around',
        gap:theme.spacing(5),
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            textAlign:'center',
        },
    }))

    const CustoContainer = styled(Container)(({theme})=>({
        display:'flex',
        gap:'2rem',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            textAlign:'center',
        },
    }))




   

  return (
    
    <Box sx={{py:10,backgroundColor:"#7D8085"}}>
      
       <CustomContainer>
       <Box>
        <Typography sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                About 

            </Typography>
            <Typography 
            sx={{
                fontSize:'20px',
                color:'#E2E2E2',
                fontWeight:'700',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Sunrise Oasis Lighting LLC

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!
            </Typography>
            



        </Box>
        <Box> 
            <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Indoor

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Downlights
Spot Light
Modular Lights
Recessed Linear Lights
Magnetic Track Lights
Linear Pendant Lights
Track Lights
Mirror Lights
            </Typography>

        </Box>


        <Box>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Outdoor

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
 Bollard Lights
Spike Lights
Step Lights
Street Lights
Wall Mounted Lights
Flood Lights
High Bay
Parking Lights
            </Typography>
            


        </Box>



        <Box>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Decorative

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Pendant Lights
Decorative Wall Lights
Floor & Table Lights
Curve Series
            </Typography>
            


        </Box>

        <Box>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Facad Lights

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Strip Lights
Neon Lights
            </Typography>
            


        </Box>
        <Box>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Accessories

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Aluminium Profiles
Frames
Connectors
Lamps
LED Driver
Switches
            </Typography>
            


        </Box>

        <Box>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Brands

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Tecno-light
Giomilano
ArtDna
Echips
Ltech
            </Typography>
            


        </Box>
      
       </CustomContainer>
       <div style={{
            width:'80%',
            height:'2px',
            backgroundColor:'#E2E2E2',
            margin:'0 auto',
            my:2
        }}></div>

<CustoContainer>
       <Box
       sx={{my:4}}>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
              Head Office 

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Al Quoz Ind Area 4, Al Kahrman 4 Street, Dubai<br/>
P.O Box 186021 Ware House No 13<br/>
+971 4 2232 332 +971 4 323 6088


            </Typography>
           
        </Box>
        <Box
       sx={{my:4}}>
            <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Branch -  Abu Dhabi

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Mussafah 34 - near New Labour Court<br/>
Abu Dhabi - U.A.E<br/>
+971 55 892 4364
| +971 2 883 6637
            </Typography>

        </Box>


        <Box
       sx={{my:4}}>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Showroom

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Nakheel Street 41, Deira - Dubai UAE,<br/>
+971 4 250 2810
            </Typography>
            


        </Box>





   
      
       </CustoContainer>
       <CustoContainer>
       <Box
       sx={{my:1}}>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
              Reach US

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
info@sunriseoasislighting.com



            </Typography>
           
        </Box>
        <Box
       sx={{my:1}}>
            <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Branch -  Saudi Arabia

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Al Malaz, Riyadh - Saudi Arabia<br/>
+966 57 226 4809
            </Typography>

        </Box>


        <Box
       sx={{my:1}}>
        <Typography sx={{
                fontSize:'15px',
                color:'#393D46',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
                Logistic Centre

            </Typography>
            <Typography 
            sx={{
                fontSize:'10px',
                color:'#E2E2E2',
                fontWeight:'500',
                fontFamily:'Noto Serif Tamil',
                mb:2,
            }}>
Warehouses Lands - Sharjah, UAE<br/>
+971 558966670
            </Typography>
            


        </Box>





   
      
       </CustoContainer>
       <div style={{
            width:'80%',
            height:'2px',
            backgroundColor:'#E2E2E2',
            margin:'0 auto',
            my:2
        }}></div>
    </Box>
  );
};

export default Footer