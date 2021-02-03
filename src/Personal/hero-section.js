import React from 'react';




class Hero extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
         header:[{mobile: '+91 123456789', mail:'xyz@mail.com'}],
         data: [{linkTo: "#home", text: "Home"},{linkTo: "#about", text: "About"},{linkTo: "#gallery", text: "Gallery"},{linkTo: "#pricing", text: "Pricing"},{linkTo: "#contact", text: "contact"}],
      	 home:[{stitle:'Welcome To Luxury Spa', maintitle:'choose best package for your beauty'}],
      }

  }
   render(){
		return(
			<div>
    			<header>
					 <div  className="home d-flex flex-column">
				        <div className="home-text my-auto">
				            <div className="container">
				                <div className="row align-items-center">
				                    <div className="col-sm-12">
				                        <h3>{this.state.home[0].stitle}</h3>
				                        <h1 style={{ width: '50%' }} >{this.state.home[0].maintitle}</h1>
				                        <a className="theme-btn" href="#!">MORE DETAIL</a>
				                    </div>
				                </div>
				            </div>
				        </div>
    				</div>
    			</header>
	       </div>
	    );
    }
}



export default Hero;