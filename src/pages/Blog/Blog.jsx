import React from 'react'
import {styled, Typography, } from '@mui/material'
import {Box,} from "@mui/system"
import CustomCard from '../../Components/CustoCard/CustoCard'
import retImg from '../../asset/Rectangle 153.png'
import aroImg from '../../asset/Line 68.png'
function Blog() {
    const CustomBox = styled(Box)(({theme})=>({
        width:'30%',
        [theme.breakpoints.down('md')]:{
            width:'85%',
        }
    }))
  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'30px',
        backgroundColor:'#F1F1F1',
        
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
            News, Blog & Articles

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
         Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!
            </Typography>
            </CustomBox>
            <Box
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'15px',
            maxWidth:'auto',
            marginLeft:'0px',
            marginBottom:'-24px',
            mt:2
        
           }}>
              
                 
                <CustomCard
                img={retImg}
                item={'News, Blog & Articles'}
                price={'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!'}
                name={'Read Full Articles'}
                arrow={aroImg}
                />
          <CustomCard
                img={retImg}
                item={'News, Blog & Articles'}
                price={'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!'}
                name={'Read Full Articles'}
                arrow={aroImg}
                />
               <CustomCard
                img={retImg}
                item={'News, Blog & Articles'}
                price={'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!'}
                name={'Read Full Articles'}
                arrow={aroImg}
                />
               <CustomCard
                img={retImg}
                item={'News, Blog & Articles'}
                price={'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!'}
                name={'Read Full Articles'}
                arrow={aroImg}
                />
                
                
            </Box>
            </Box>
  )
}

export default Blog