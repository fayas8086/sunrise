import React from 'react'
import { Box,Typography } from '@mui/material'
import { styled } from '@mui/system';
import aroImg from '../../asset/mission.png'
import bubImg from '../../asset/Group 93.png'
import Client from '../Client/Client';
import Company from '../Company/Company'
import Brand from '../Brand/Brand';
import Validates from '../Validates/Validates';
import Accom from '../Accom/Accom'

const Inform =() => {
  
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
        backgroundColor:'#F1F1F1'
    }}>


        
<Box sx={{display:'flex',
gap:'4rem'}}>
        
        
        <GuidesBox>
            
            
                <Box>
                <img src={aroImg} alt='buyIcon'/>
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
                    Mission
                </Typography>
                <Typography variant='body2'
                sx={{
                    fontWeight:'400',
                    fontSize:'12px',
                    color:'#7D8085',
                    fontFamily:'Noto Serif Tamil',
                    my:1,
                }}>
                     At Sunrise Oasis Lighting, we assess our success by the degree of <br/>customer satisfaction we obtain, not by the quality of our methods.<br/> Sunrise Oasis Lighting is proud to manage some of the region's most<br/> cutting-edge lighting equipment and services. 
                </Typography>
                </Box>
               
            
 
        </GuidesBox>

        <GuidesBox>
            
            
            <Box>
            <img src={bubImg} alt='buyIcon'/>
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
                Vision
            </Typography>
            <Typography variant='body2'
            sx={{
                fontWeight:'400',
                fontSize:'12px',
                color:'#7D8085',
                fontFamily:'Noto Serif Tamil',
                my:1,
            }}>
                 At Sunrise Oasis Lighting, we assess our success by the degree of <br/>customer satisfaction we obtain, not by the quality of our methods.<br/> Sunrise Oasis Lighting is proud to manage some of the region's most<br/> cutting-edge lighting equipment and services. 
            </Typography>
            </Box>
           
        

    </GuidesBox>
    
        
        </Box>
        <Typography 
        variant='h3'
        sx={{
            fontSize:'35px',
            fontWeight:'700',
            fontFamily:' Noto Serif Tamil',
            color:'#393D46',
            my:3
        }}>
           Values | Objectives

        </Typography>

  
            <Typography
            variant='body2' 
            sx={{
                fontSize:'16px',
                fontWeight:'400',
                fontFamily:' Noto Serif Tamil',
                color:'#7D8085',
                textAlign:'center',
                padding:'15 px'
            }}>
         DAt Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. At Sunrise Oasis Lighting, we assess our success by the degree of customer satisfaction we obtain, not by the quality of our methods. Sunrise Oasis Lighting is proud to manage some of the region's most cutting-edge lighting equipment and services. 
            </Typography>
      
            <Company/>
            <Accom/>
            <Brand/>
            <Client/> 
            <Validates/>
            
    </Box>
  )
}

export default Inform