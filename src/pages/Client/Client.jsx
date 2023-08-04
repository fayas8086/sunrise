import React from 'react'
import {styled, Typography, } from '@mui/material'
import {Box,} from "@mui/system"
import CustomButton from '../../Components/CustomButton/CustomButton'
import Lets from '../Lets/Lets';


function Client() {

    const CustomBox = styled(Box)(({theme})=>({
        width:'30%',
        [theme.breakpoints.down('md')]:{
            width:'85%',
        }
    }))
  return (
    <Box
    sx={{
      
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding:'40px',
      backgroundColor:'#F1F1F1',
      mt:10
  }}
    >
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'30px',
        backgroundColor:'#F1F1F1',
        
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
        Clients

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
         Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
Shop now and brighten up your home with our stunning lighting fixtures!
            </Typography>
            </CustomBox>
            <Box sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    padding:'15px',
    maxWidth:'auto',
    marginLeft:'0px',
    marginBottom:'-24px',
    mt:2,
    gap:'1rem'
    

   }}>
            
                 
                  
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Spot Lights"
                    borderBlockColor='#393D46'
                    /> 
                    <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Modular Lights"
                    borderBlockColor='#393D46'
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Recessed Linear Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Magnetic Track Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Linear Pendant Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Cabinet Lights"
                    borderBlockColor='#393D46'
                    /> 
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Track Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
            </Box>

            <Box sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    padding:'15px',
    maxWidth:'auto',
    marginLeft:'0px',
    marginBottom:'-24px',
    mt:2,
    gap:'1rem'
    

   }}>
            
                 
            <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Spot Lights"
                    borderBlockColor='#393D46'
                    /> 
                    <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Modular Lights"
                    borderBlockColor='#393D46'
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Recessed Linear Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Magnetic Track Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Linear Pendant Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Cabinet Lights"
                    borderBlockColor='#393D46'
                    /> 
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Track Lights"
                    borderBlockColor='#393D46'
                    
                    /> 
            </Box>
          
    </Box>
    
    </Box>
    

  )
}

export default Client