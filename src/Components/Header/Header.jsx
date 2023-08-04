import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import {styled} from '@mui/system';
import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../asset/Full Logo.png'
function Header() {
  const navigate = useNavigate()
    const nav_title=[{
        path:'/',
        display:'Home'
      },
      {
        path:'/Aboutus',
        display:'About Us'
      },
      {
        path:'',
        display:'Shop'
      },
      {
        path:'',
        display:'Blog'
      },
     
    ]

    const NavBarLinksBox = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]:{
          display:'none',
        }
      }));

      const NavBarLink = styled(Typography)(()=>({
        fontSize:"14px",
        color:'#E2E2E2',
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{
          color:'#FCAF17'
        }
        }));

        const NavBarLogo = styled("img")(({theme})=>({
            cursor:'pointer',
            height:'50px',
            [theme.breakpoints.down("md")]:{
              display:'none',
            }
          }));

  return (
   <Box sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'15px',
    maxWidth:'auto',
    backgroundColor:'#393D46',
    marginLeft:'0px',
    marginBottom:'-24px'

   }}>
    <Box
    sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'30rem'
       
        
    
       }}>

        <Box sx={{
    display:'flex',
    alignItems:'center',
    
    }}>
<NavBarLogo src={logoImg} />
        </Box>
    <NavBarLinksBox>
        {nav_title.map((item, index) => (
          
          <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>{item.display}</NavBarLink>
         
        ))}
      </NavBarLinksBox>

    </Box>

    <Box   sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'1rem'
    

   }}>
        
    <CustomButton
      backgroundColor='#393D46'
      color='#E2E2E2'
     buttonText="Smat TOuch"
     borderBlockColor='#E2E2E2'
     /> 
    
                    <CustomButton
                    backgroundColor='#393D46'
                    color='#E2E2E2'
                    buttonText="Login/Register"
                    borderBlockColor='#E2E2E2'
                    
                    /> 

    </Box>


   </Box>
  )
}

export default Header