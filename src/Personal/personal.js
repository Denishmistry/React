import React from 'react';
//import Nav from './nav';
import {Link} from "react-router-dom";
// import logo from './src/images/logo.png';



class NavBar extends React.Component {
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
			  <div className="header-top">
			    <div className="container">
			            <div className="row">
			                <div className="col-sm-12 d-flex justify-content-end">
			                    <a href="#!">Mobile no :{this.state.header[0].mobile}</a>
			                    <a href="#!">Email :{this.state.header[0].mail}</a>
			                </div>
			            </div>
			    </div>
			  </div>
			    <nav id="navbar-example" className="navbar navbar-expand-md navbar-light sticky-top">
				        <div className="container">
				            <a className="navbar-brand logo" href="#!"><img className="img-fluid" src={require('./images/logo.png')}  alt="Logo"/></a>
				            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				            <span className="navbar-toggler-icon"></span>
				            </button>
				            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				                
				                	<div className="navbar-nav ml-auto">
				              		  <Link className="nav-item nav-link active" to="/">Home</Link>
				                  	  <Link className="nav-item nav-link " to="/about">About</Link>
				                  	  <Link className="nav-item nav-link " to="/pricing">Pricing</Link>
				                  	</div>
				       
				                
				            </div>
				        </div>
    			</nav>
    	
	       </div>
	    );
    }
}

//class Navlist extends React.Component {
 //  render() {
   //   return (
     //    <a className="nav-item nav-link active"  href={this.props.data.linkTo}>{this.props.data.text}</a>
      //);
   //}
//}



export default NavBar;