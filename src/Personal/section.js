import React from 'react';
import './bootstrap.min.css';
import './style.css';


class Section extends React.Component {

   render(){
		return(	
        <div>
		<section id="about" className="alt-bg ">		
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-8 about p-2 p-md-5">
                        <div className="row justify-content-lg-center justify-content-xl-end">
                            <div className="about-image">
                                <img className="img-fluid" src={require('./images/about.jpg')}  alt="About us" />
                            </div>
                            <div className="col-lg-12 col-xl-7">
                                <div className="title-one">
                                    <h2>{this.props.title}</h2>
                                </div>
                                <p>{this.props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>	
    </div>
	    );
    }
}
Section.defaultProps = {
  aboutimage: '././images/about.jpg',
  title:'About us',
  text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',

}
export default Section;