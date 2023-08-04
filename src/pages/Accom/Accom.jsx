import Accordion from 'react-bootstrap/Accordion';
import { Box,Typography} from '@mui/material'
function AlwaysOpenExample() {
 
    const headerStyle = {
        fontWeight:'400',
                fontSize:'18px',
                color:'#393D46',
                fontFamily:'Noto Serif Tamil',
             
      };
    const bodyStyle = {
        fontWeight:'400',
        fontSize:'12px',
        color:'#7D8085',
        fontFamily:'Noto Serif Tamil',   
      };
 return (
<Box sx={{backgroundColor:'#F1F1F1'}}>
<Typography variant='body2'
            sx={{
                fontWeight:'700',
                fontSize:'36px',
                color:'#393D46',
                fontFamily:'Noto Serif Tamil',
                textAlign:'center',
                my:4
            }}>
                Why to Choose Us ?
            </Typography>
    <Box sx={{display:'flex',
gap:'4rem'}}>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={headerStyle}>1 Discover our wide range of lighting fixture </Accordion.Header>
        <Accordion.Body style={bodyStyle}>
        Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste. Shop now and brighten up your home with our stunning lighting fixtures!
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={headerStyle}>4 Discover our wide range of lighting fixture </Accordion.Header>
        <Accordion.Body style={bodyStyle}>
        Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste. Shop now and brighten up your home with our stunning lighting fixtures!
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </Box>
    <Box sx={{display:'flex',
gap:'4rem'}}>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={headerStyle}>2 Discover our wide range of lighting fixture </Accordion.Header>
        <Accordion.Body style={bodyStyle}>
        Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste. Shop now and brighten up your home with our stunning lighting fixtures!
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={headerStyle}>5 Discover our wide range of lighting fixture </Accordion.Header>
        <Accordion.Body style={bodyStyle}>
        Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste. Shop now and brighten up your home with our stunning lighting fixtures!
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </Box>
    <Box sx={{display:'flex',
gap:'4rem'}}>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={headerStyle}>3 Discover our wide range of lighting fixture </Accordion.Header>
        <Accordion.Body style={bodyStyle}>
        Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste. Shop now and brighten up your home with our stunning lighting fixtures!
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={headerStyle}>6 Discover our wide range of lighting fixture </Accordion.Header>
        <Accordion.Body style={bodyStyle}>
        Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste. Shop now and brighten up your home with our stunning lighting fixtures!
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </Box>
    </Box>
  );
}

export default AlwaysOpenExample;