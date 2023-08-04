import React from 'react';
import { styled, } from '@mui/system';
import { Box, Container, } from '@mui/system';
import frstImg from '../../asset/image 8.png';
import secndImg from '../../asset/Rectangle 197.png';
import trdImg from '../../asset/Rectangle 194.png';
import foreImg from '../../asset/Rectangle 195.png'
import fivImg from '../../asset/Rectangle 196.png'
import sixeImg from '../../asset/Rectangle 198.png'
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Typography } from '@mui/material';


function Imag() {
    const CustomBox = styled(Box)(({theme})=>({
        width:'30%',
        [theme.breakpoints.down('md')]:{
            width:'85%',
        }
    }))
  const CustomContainer = styled(Container)(({ theme }) => ({
    justifyContent:'center',
    display: 'flex',
    gap: theme.spacing(1),
    py: '5',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));
  

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: '250px',
    gap:'2rem'
    
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: '#F1F1F1' }}>
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
           Projects

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
                    buttonText="Indoor"
                    borderBlockColor='#393D46'
                    
                    /> 
                      <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Outdoor"
                    borderBlockColor='#393D46'
                    /> 
                     <CustomButton
                    backgroundColor='#F1F1F1'
                    color='#393D46'
                    buttonText="Facade"
                    borderBlockColor='#393D46'
                    
                    /> 
            </Box>
            
      <CustomContainer>
        <Box sx={{pt:2}}>
          <ImgContainer>
            <img src={frstImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </ImgContainer>
          <Box sx={{ pt: 1 }}>
            <ImgContainer>
              <img src={secndImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </ImgContainer>
          </Box>
        </Box>
        <Box sx={{pt:2}}>
          <ImgContainer>
            <img src={trdImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </ImgContainer>
          <Box sx={{ pt: 1 }}>
            <ImgContainer>
              <img src={foreImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </ImgContainer>
          </Box>
       
        </Box>
        <Box sx={{pt:2}}>
          <ImgContainer>
            <img src={fivImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </ImgContainer>
          <Box sx={{ pt: 1 }}>
            <ImgContainer>
              <img src={sixeImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </ImgContainer>
          </Box>
       
        </Box>
        
      </CustomContainer>
      </Box>
    </Box>
  );
}

export default Imag;
