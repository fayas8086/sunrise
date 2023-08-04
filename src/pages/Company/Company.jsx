import React from 'react'
import { Box,Typography } from '@mui/material'
import { styled } from '@mui/system';
import recImg from '../../asset/Rectangle 182.png'


const Company =() => {
    const CustomBox = styled(Box)(({theme})=>({
        width:'30%',
        [theme.breakpoints.down('md')]:{
            width:'85%',
        }
    }))

    const GuidesBox = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'space-around',
        width:'70%',
        gap:'1rem',
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down('md')]:{
            width:"100%",
        },
        [theme.breakpoints.down('sm')]:{
            marginBottom:'0',
            flexDirection:'column',
        }
    }))



  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'40px',
        backgroundColor:'#E2E2E2'
    }}>


        <Typography 
        variant='h3'
        sx={{
            fontSize:'35px',
            fontWeight:'700',
            fontFamily:' Noto Serif Tamil',
            color:'#393D46',
            my:3
        }}>
           Group of Companies

        </Typography>

        <CustomBox>
            <Typography
            variant='body2' 
            sx={{
                fontSize:'16px',
                fontWeight:'400',
                fontFamily:' Noto Serif Tamil',
                color:'#7D8085',
                textAlign:'center',
            }}>
         Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
Shop now and brighten up your home with our stunning lighting fixtures!
            </Typography>
        </CustomBox>
<Box sx={{display:'flex'}}>
        
        
        <GuidesBox>
            
            
                <Box>
                <img src={recImg} alt='buyIcon'/>
                </Box>
                <Box>
                <Typography variant='body2'
                sx={{
                    fontWeight:'700',
                    fontSize:'18px',
                    color:'#393D46',
                    fontFamily:'Noto Serif Tamil',
                    my:1,
                }}>
                    Group of Companies
                </Typography>
                <Typography variant='body2'
                sx={{
                    fontWeight:'500',
                    fontSize:'12px',
                    color:'#7D8085',
                    fontFamily:'Noto Serif Tamil',
                    my:1,
                }}>
                     Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
                </Typography>
                </Box>
               
            
 
        </GuidesBox>

        <GuidesBox>
            
            
            <Box>
            <img src={recImg} alt='buyIcon'/>
            </Box>
            <Box>
            <Typography variant='body2'
            sx={{
                fontWeight:'700',
                fontSize:'18px',
                color:'#393D46',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                Group of Companies
            </Typography>
            <Typography variant='body2'
            sx={{
                fontWeight:'500',
                fontSize:'12px',
                color:'#7D8085',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                 Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
            </Typography>
            </Box>
           
        

    </GuidesBox>

    <GuidesBox>
            
            
            <Box>
            <img src={recImg} alt='buyIcon'/>
            </Box>
            <Box>
            <Typography variant='body2'
            sx={{
                fontWeight:'700',
                fontSize:'18px',
                color:'#393D46',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                Group of Companies
            </Typography>
            <Typography variant='body2'
            sx={{
                fontWeight:'500',
                fontSize:'12px',
                color:'#7D8085',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                 Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
            </Typography>
            </Box>
           
        

    </GuidesBox>
        
        </Box>
       
        <Box sx={{display:'flex'}}>
        
        
        <GuidesBox>
            
            
                <Box>
                <img src={recImg} alt='buyIcon'/>
                </Box>
                <Box>
                <Typography variant='body2'
                sx={{
                    fontWeight:'700',
                    fontSize:'18px',
                    color:'#393D46',
                    fontFamily:'Noto Serif Tamil',
                    my:1,
                }}>
                    Group of Companies
                </Typography>
                <Typography variant='body2'
                sx={{
                    fontWeight:'500',
                    fontSize:'12px',
                    color:'#7D8085',
                    fontFamily:'Noto Serif Tamil',
                    my:1,
                }}>
                     Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
                </Typography>
                </Box>
               
            
 
        </GuidesBox>

        <GuidesBox>
            
            
            <Box>
            <img src={recImg} alt='buyIcon'/>
            </Box>
            <Box>
            <Typography variant='body2'
            sx={{
                fontWeight:'700',
                fontSize:'18px',
                color:'#393D46',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                Group of Companies
            </Typography>
            <Typography variant='body2'
            sx={{
                fontWeight:'500',
                fontSize:'12px',
                color:'#7D8085',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                 Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
            </Typography>
            </Box>
           
        

    </GuidesBox>

    <GuidesBox>
            
            
            <Box>
            <img src={recImg} alt='buyIcon'/>
            </Box>
            <Box>
            <Typography variant='body2'
            sx={{
                fontWeight:'700',
                fontSize:'18px',
                color:'#393D46',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                Group of Companies
            </Typography>
            <Typography variant='body2'
            sx={{
                fontWeight:'500',
                fontSize:'12px',
                color:'#7D8085',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                 Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.
            </Typography>
            </Box>
           
        

    </GuidesBox>
        
        </Box>
    </Box>
  )
}

export default Company