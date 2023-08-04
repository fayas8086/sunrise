import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import fstImg from '../../asset/project1_petrol_pump 2.png';
import scdImg from '../../asset/project1_petrol_pump 2 (1).png';
import thdImg from '../../asset/petrolpumb3.png';
import CustomButton from '../../Components/CustomButton/CustomButton';

function CarouselFadeExample() {
  return (
    <Box sx={{
      mt: 2,
      position: 'relative', 
    }}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fstImg}
            alt="First slide"
            style={{ maxHeight: '550px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={captionStyle}>
            <h3>Illuminate your space<br/>
with style and efficiency</h3>
            <p>We believe in the power of brands to create credibility. That’s why we partner with the best <br/>to bring you top-quality products.Trust us to deliver excellence, every time.<br/>
Shop with confidence, knowing you’re getting the best.</p>
<br/>
<CustomButton
                    backgroundColor='#393D46'
                    color='#FCAF17'
                    buttonText="Learn More about Project"
                    borderBlockColor='#FCAF17'
                    
                    /> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={scdImg}
            alt="Second slide"
            style={{ maxHeight: '550px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thdImg}
            alt="Third slide"
            style={{ maxHeight: '550px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

const captionStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  textAlign: 'left',                                           
  transform: 'translateY(-50%)',       
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  padding: '30px',                     
};

export default CarouselFadeExample;
