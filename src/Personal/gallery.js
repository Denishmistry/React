import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

 
class DemoCarousel extends React.Component {
    
    render() {
        return (
            <Carousel emulateTouch={true}>
                <div>
                    <img src={require('./images/bg.jpg')}  alt="s" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('./images/bg.jpg')}  alt="s" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('./images/bg.jpg')} alt="s" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
        
    }

}
export default DemoCarousel;
