import React from 'react';
import { styled, } from '@mui/system';
import { Box, Container, } from '@mui/system';
import frstImg from '../../asset/image 5.png';
import secndImg from '../../asset/image 5 (1).png';
import trdImg from '../../asset/image 5 (2).png';
import foreImg from '../../asset/image 5 (3).png';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Typography } from '@mui/material';


function Imag() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    
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
      <CustomContainer>
        <Box>
          <ImgContainer>
            <img src={frstImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </ImgContainer>
          <Box sx={{ pt: 1 }}>
            <ImgContainer>
              <img src={secndImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </ImgContainer>
          </Box>
        </Box>
        <Box>
          <ImgContainer>
            <img src={trdImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </ImgContainer>
          <Box sx={{ pt: 1 }}>
            <ImgContainer>
              <img src={foreImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </ImgContainer>
          </Box>
       
        </Box>
        <Box sx={{mt:5}}>
        <Box  sx={{ padding:'50px', background: 'linear-gradient(135deg, #7D8085 0%, #393D46 41.69%)'}}>
        <Typography
            variant='body2' 
            sx={{
                fontSize:'30px',
                fontWeight:'700',
                color:'#E2E2E2',
                fontFamily:'Noto Serif Tamil'
            }}>
         About US
            </Typography>
            <Typography
            variant='body2' 
            sx={{
                fontSize:'12px',
                fontWeight:'400',
                color:'#E2E2E2',
                pt:2,
                fontFamily:'Noto Serif Tamil'
            }}>
        Tecnolight is one of the world’s largest online retailer of modern and contemporary lighting and furnishings, as well as a popular destination for modern design fans. Tecnolight has spent years establishing itself as the leading online and offline supplier of high-end designer products with a fresh and contemporary appearance. Tecnolight’s range of over 18,000 modern lights includes everything from legendary mid-century modern lighting to cutting-edge contemporary lighting for today’s homes.
            </Typography>
<Box
sx={{mt:10}}>
        <CustomButton
                    background='linear-gradient(135deg, #7D8085 0%, #393D46 41.69%)'
                    color='#E2E2E2'
                    buttonText="Learn More About US"
                    borderBlockColor='#E2E2E2'
                    
                    /> 
                    </Box>
                    </Box>
                    </Box>
      </CustomContainer>
    </Box>
  );
}

export default Imag;
