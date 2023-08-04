import React from 'react'
import {styled, Typography } from '@mui/material'
import {Box, Container } from "@mui/system"
import CustomButton from '../../Components/CustomButton/CustomButton';
function Lets() {

    const CustomContainer = styled(Container)(({theme})=>({
        background:'linear-gradient(135deg, #7D8085 0%, #393D46 41.69%)',
        height:'120px',
        width:'50%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
            height:'auto',
            flexDirection:'column',
            alignItems:'center',
            padding:theme.spacing(3,3,0,3),
            width:'90%',
        },
    }));

    const CustomBox = styled(Box)(({theme})=>({
        padding:theme.spacing(10,0,10,0),
        margin:theme.spacing(0,2,0,2),
        backgroundColor:'#F1F1F1',
        [theme.breakpoints.down('md')]:{
            padding:'0',
        }
    }))
  return (
    <CustomBox>
    <CustomContainer>
           <Box>
                <Typography sx={{fontSize:'30px',color:'white',fontWeight:'700',fontFamily:' Noto Serif Tamil',}}>
                    Let's talk about your project.
                </Typography>        
            </Box>
            <CustomButton
                    backgroundColor='#393D46'
                    color='#E2E2E2'
                    buttonText="Ask for price Quatation"
                    borderBlockColor='#E2E2E2'
                    
                    /> 
    </CustomContainer>
    </CustomBox>
  )
}

export default Lets