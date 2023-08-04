import {styled, Typography } from '@mui/material'
import {Box, Container } from "@mui/system"
import CustomButton from '../../Components/CustomButton/CustomButton';import React from 'react'
import CustomCard from '../../Components/CusttomCard/Custtomcard';
import lightImg from '../../asset/light.png'


function Product() {
    const CustomContainer = styled(Container)(({theme})=>({
        display:'flex',
        justifyContent:'space-around',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
            marginBottom:theme.spacing(4),
        },
    }));
    const CustomBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down('md')]:{
            marginBottom:theme.spacing(4),
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
    <Box
    sx={{
        mt:10
    }}>
          <CustomContainer>
            <CustomBox>
                <Typography variant='body2'
                sx={{
                    color:"#393D46",
                    fontSize:'36px',
                    fontWeight:'bold',
                    fontFamily: 'Noto Serif Tamil',
                    mt:2,
                }}>
                   Featured Products

                </Typography>
                <Typography variant='body2'
                sx={{
                    color:"#7D8085",
                    fontSize:'16px',
                    fontWeight:'400',
                    fontFamily: 'Noto Serif Tamil',
                    mt:2,
                }}>
                    Brighten up your space with our featured lighting fixtures! From sleek and modern to classic and elegant, we have the perfect fixture to match your style. Shop now and see the difference good lighting can make!

                </Typography>
            </CustomBox>
            <Box sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'15px',
    maxWidth:'auto',
    marginLeft:'0px',
    marginBottom:'-24px',
    gap:'1rem'

   }}>
            
                     <CustomButton
                    backgroundColor='#FFF'
                    color='#393D46'
                    buttonText="Indoor"
                    borderBlockColor='#393D46'
                    
                    /> 
                     <CustomButton
                    backgroundColor='#FFF'
                    color='#393D46'
                    buttonText="Outdoor"
                    borderBlockColor='#393D46'
                    
                    /> 
                     <CustomButton
                    backgroundColor='#FFF'
                    color='#393D46'
                    buttonText="Decorative"
                    borderBlockColor='#393D46'
                    
                    /> 
                    <CustomButton
                    backgroundColor='#FFF'
                    color='#393D46'
                    buttonText="Strip & Neon"
                    borderBlockColor='#393D46'
                    
                    /> 
            </Box>
        </CustomContainer>
        <CustomContain>
        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'15px',
            maxWidth:'auto',
            marginLeft:'0px',
            marginBottom:'-24px'
        
           }}>
              
                 <CustomCard
                img={lightImg}
                item={'Essential'}
                price={'AED 85.75/Piece'}
                name={'Please Login/Register to See the Stock Details'}
                />
                  <CustomCard
                img={lightImg}
                item={'Essential'}
                price={'AED 85.75/Piece'}
                name={'Please Login/Register to See the Stock Details'}
                />
                  <CustomCard
                img={lightImg}
                item={'Essential'}
                price={'AED 85.75/Piece'}
                name={'Please Login/Register to See the Stock Details'}
                />
                  <CustomCard
                img={lightImg}
                item={'Essential'}
                price={'AED 85.75/Piece'}
                name={'Please Login/Register to See the Stock Details'}
                />
                  <CustomCard
                img={lightImg}
                item={'Essential'}
                price={'AED 85.75/Piece'}
                name={'Please Login/Register to See the Stock Details'}
                />
                
                
            </Box>
            </CustomContain>
            

    </Box>
    
  )
}

export default Product