import React from 'react'
import { Box,styled, Typography } from '@mui/material'


const CustomCard=({img,price,name,item,arrow})=> {
    const DishBox= styled(Box)(({theme})=>({
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        maxWidth:350,
        backgroundColor:'#F1F1F1',
        margin:theme.spacing(0,2,0,2),
        [theme.breakpoints.down('md')]:{
            margin:theme.spacing(2,0,2,0),
        },
        "&:hover":{
            backgroundColor:'#E2E2E2',
            boxShadow:'0 0 5px rgba(0,0,0,0.2)',
            transform:'scale(1.05)',
            transition:'all 0.3s ease-in-out',
        },

    }))

    const InfoBox = styled(Box)(()=>({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }))

    const ImgContainer = styled(Box)(()=>({
        width:"100%",
    }))
  return (
    <DishBox>
        <ImgContainer>
        <img src={img} alt='housePhoto' style={{maxWidth:"100%"}}/>

        </ImgContainer>
        <Box sx={{
            padding:'1rem'
        }}>
         
            <Typography variant='body2'
            sx={{
                fontFamily:' Noto Serif Tamil',
                color:'#393D46',
                fontSize:'18px',
                fontWeight:'500',
                my:2
            }}>
                {item}

            </Typography>
            <Typography variant='body2'
            sx={{
                fontFamily:' Noto Serif Tamil',
                color:'#7D8085',
                fontSize:'14px',
                fontWeight:'500',
                 my:2
            
            }}>
                {price}
                

            </Typography>
            <Typography variant='body2'sx={{
                        fontFamily:' Noto Serif Tamil',
                        color:'#7D8085',
                        fontSize:'14px',
                        fontWeight:'500',
                       mt:1}}>
                {name}
                    </Typography>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around',
            }}>
                


            </Box>
            <ImgContainer>
        <img src={arrow} alt='housePhoto' style={{maxWidth:"100%"}}/>

        </ImgContainer>
        </Box>
    </DishBox>
  )
}

export default CustomCard