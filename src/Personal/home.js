import React from 'react';
import Section from './section';
import Pricing from './pricing';
import Hero from './hero-section';

class HomePage extends React.Component {

   render(){
        return( 
          <div className="HomePage">
          	  <Hero/>
              <Section/>
              <Pricing/>
          </div>
        );
    }
}

export default HomePage;