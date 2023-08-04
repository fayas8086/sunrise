import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import {styled} from '@mui/system';
import React from 'react'
function Header() {
  const navigate = useNavigate()
    const nav_title=[
      {
        path:'/message',
        display:'Messages'
      },
      {
        path:'/info',
        display:'Company Information'
      },
      {
        path:'/serv',
        display:'Projects & Services'
      },

      {
        path:'/galary',
        display:'Gallery'
      },
      {
        path:'',
        display:' CSR'
      },
      {
        path:'',
        display:'Download'
      },
      {
        path:'',
        display:'Contact US'
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



  return (
   <Box sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'35px',
    maxWidth:'auto',
    background:'linear-gradient(135deg, #7D8085 0%, #393D46 41.69%)',
    marginLeft:'0px',
    marginBottom:'-24px'

   }}>
    <Box
    sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'45rem'
       
        
    
       }}>

        <Box sx={{
    display:'flex',
    alignItems:'center',
    
    }}>

        </Box>
    <NavBarLinksBox>
        {nav_title.map((item, index) => (
          
          <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>{item.display}</NavBarLink>
         
        ))}
      </NavBarLinksBox>

    </Box>

 


   </Box>
  )
}

export default Header