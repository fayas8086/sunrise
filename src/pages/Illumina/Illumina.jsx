import { Box } from '@mui/material'
import {styled} from '@mui/system';
import illuImg from '../../asset/styleandefficency.png'
import React from 'react'
import { Container } from 'react-bootstrap';

function Illumina() {
    const ImgContainer = styled(Box)(({theme})=>({
        width:'100%',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            alignItems:'center',
        }
    }))


    return (
        <Box sx={{
            padding:'50px',
            backgroundColor:'#F1F1F1',
        }}>
        <Container>
       <ImgContainer>
                <img src={illuImg}  style={{maxWidth:'100%'}}/>
                </ImgContainer>
                </Container>
                </Box>
                
  )
}

export default Illumina