import {styled, Typography } from '@mui/material'
import {Box, Container } from "@mui/system"
import React from 'react'

import lightImg from '../../asset/Rectangle 216.png'




function Validates() {
  
    const CustomBox = styled(Box)(({theme})=>({
        width:'30%',
        [theme.breakpoints.down('md')]:{
            width:'85%',
        }
    }))
    const CustomContain = styled(Container)(({theme})=>({
         justifyContent:'space-around',
    
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            alignItem:'center',
        },
    }));
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:'30px',
            backgroundColor:'##F1F1F1',
            
        }}>
          
          <Typography 
        variant='h3'
        sx={{
            fontSize:'36px',
            fontWeight:'bold',
            fontWeight:'700',
            color:'#393D46',
            fontFamily:'Noto Serif Tamil',
            my:3
        }}>
           Certification that validates

        </Typography>
        <CustomBox>
        <Typography
            variant='body2' 
            sx={{
                fontSize:'16px',
                fontWeight:'400',
                color:'#7D8085',
                textAlign:'center',
                fontFamily:'Noto Serif Tamil'
            }}>
Light up any space with our versatile lighting fixtures. From the living room to the bedroom and beyond, our fixtures are perfect for any area of your home.
Shop now and discover the perfect lighting solution for every room!
            </Typography>
            </CustomBox>

        
        <CustomContain>
        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'15px',
            maxWidth:'auto',
            marginLeft:'0px',
            marginBottom:'-24px',
            mt:2
        
           }}>
              
              <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
            <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
            <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
            <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
                
                
                
            </Box>
            </CustomContain>

            <CustomContain>
        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'15px',
            maxWidth:'auto',
            marginLeft:'0px',
            marginBottom:'-24px',
            mt:2
        
           }}>
              
              <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
            <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
            <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
            <Box>
            <img src={lightImg} alt='buyIcon'/>
            </Box>
                
                
                
            </Box>
            </CustomContain>
           
            

    </Box>
    
    
  )
}

export default Validates