import React from 'react';
import { styled, } from '@mui/system';
import { Box, Container, } from '@mui/system';
import menImg from '../../asset/men1.png'
import manImg from '../../asset/men2.png'
import { Typography } from '@mui/material';


function Messagr() {
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
    width: '400px',
    gap:'2rem',
    
  }));

  return (
    <Box >
    <Box sx={{ py: 10, backgroundColor: '#F1F1F1' }}>
      <CustomContainer>
    
        <Box>
          <ImgContainer>
            <img src={menImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </ImgContainer>
         
       
        </Box>
       
        <Box  sx={{ padding:'100px',}}>
   
            <Typography
            variant='body2' 
            sx={{
                fontSize:'12px',
                fontWeight:'400',
                color:'#393D46',
                pt:2,
                fontFamily:'Noto Serif Tamil'
            }}>
        At Sunrise Oasis Lighting, we assess our success by the degree of customer <br/> satisfaction we obtain, not by the quality of our methods. Sunrise Oasis<br/> Lighting is proud to manage some of the region's most cutting-edge lighting<br/> equipment and services. We are constantly diversifying our portfolio in and <br/>around the Middle East. We consistently challenge industry trends and set a <br/>pattern in our market segment, driven by our philosophy of attentive service <br/>and customer satisfaction.


            </Typography>

            <Typography
            variant='body2' 
            sx={{
                fontSize:'12px',
                fontWeight:'400',
                color:'#393D46',
                pt:2,
                fontFamily:'Noto Serif Tamil'
            }}>
              We strive to grow and improve the depth and quality of our service as we <br/> broaden our operations and reach out to new partnerships.
                </Typography>

                <Typography
            variant='body2' 
            sx={{
                fontSize:'12px',
                fontWeight:'400',
                color:'#393D46',
                pt:5,
                fontFamily:'Noto Serif Tamil'
            }}>
                - Jabbar Punnakkal
            </Typography>

                    </Box>
                    
      </CustomContainer>
      </Box>
      <Box sx={{  backgroundColor: '#E2E2E2' }}>
      <CustomContainer>
   
    <Box  sx={{ padding:'100px',
  mt:22}}>

        <Typography
        variant='body2' 
        sx={{
            fontSize:'12px',
            fontWeight:'400',
            color:'#393D46',
            pt:2,
            fontFamily:'Noto Serif Tamil'
        }}>
    At Sunrise Oasis Lighting, we assess our success by the degree of customer <br/> satisfaction we obtain, not by the quality of our methods. Sunrise Oasis<br/> Lighting is proud to manage some of the region's most cutting-edge lighting<br/> equipment and services. We are constantly diversifying our portfolio in and <br/>around the Middle East. We consistently challenge industry trends and set a <br/>pattern in our market segment, driven by our philosophy of attentive service <br/>and customer satisfaction.


        </Typography>

        <Typography
        variant='body2' 
        sx={{
            fontSize:'12px',
            fontWeight:'400',
            color:'#393D46',
            pt:2,
            fontFamily:'Noto Serif Tamil'
        }}>
          We strive to grow and improve the depth and quality of our service as we <br/> broaden our operations and reach out to new partnerships.
            </Typography>

            <Typography
        variant='body2' 
        sx={{
            fontSize:'12px',
            fontWeight:'400',
            color:'#393D46',
            pt:5,
            fontFamily:'Noto Serif Tamil'
        }}>
            - Jabbar Punnakkal
        </Typography>

                </Box>
                <Box sx={{mt:10}}>
      <ImgContainer>
        <img src={manImg} alt='housePhoto' style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </ImgContainer>
     
   
    </Box>
                
  </CustomContainer>
  </Box>
      
    
    </Box>
  );
}

export default Messagr;
