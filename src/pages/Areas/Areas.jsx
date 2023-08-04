import React from 'react'
import {styled, Typography, } from '@mui/material'
import {Box,} from "@mui/system"
import CustomButton from '../../Components/CustomButton/CustomButton'
import Lets from '../Lets/Lets';


function Areas() {

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
            Application Areas

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
         Light up any space with our versatile lighting fixtures. From the living room to the bedroom and beyond, our fixtures are perfect for any area of your home. Shop now and discover the perfect lighting solution for every room!
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
                    buttonText="Kitchen"
                    borderBlockColor='#393D46'
                    /> 
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Bedroom"
                    borderBlockColor='#393D46'
                    /> 
                    <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Hall"
                    borderBlockColor='#393D46'
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Office"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Street"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Cabinets"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Racks"
                    borderBlockColor='#393D46'
                    /> 
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Garden"
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
                    buttonText="Kitchen"
                    borderBlockColor='#393D46'
                    
                    /> 
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Bedroom"
                    borderBlockColor='#393D46'
                    
                    /> 
                    <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Hall"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Office"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Street"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Cabinets"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Racks"
                    borderBlockColor='#393D46'
                    
                    /> 
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Garden"
                    borderBlockColor='#393D46'
                    
                    /> 
            </Box>
          
    </Box>
    <Lets/>
    </Box>
    

  )
}

export default Areas