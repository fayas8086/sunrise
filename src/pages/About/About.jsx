import React from 'react'
import Head from '../../Components/Head/Head'
import { Box } from '@mui/material'
import fsImg from '../../asset/aboutus_banner_1 1.png'



function About() {
  return (
    <Box>
    
    <Box sx={{

            backgroundColor:'#F1F1F1',
            mt:1
        }}>
       
                <img src={fsImg}  style={{maxWidth:'100%'}}/>
                
                </Box>

    <Head/>
   
    
    </Box>
   
  )
}

export default About