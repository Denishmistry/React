import React from 'react';
import './bootstrap.min.css';
import './style.css';


class Footer extends React.Component {

   render(){
		return(	

    <footer  className="alt-bg alt-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-8 about p-2 p-md-5">
                    <div className="row justify-content-lg-center justify-content-xl-end">
                        <div className="about-image">
                            <img className="img-fluid"  src={require('./images/contact.png')} alt="Contact US"/>
                        </div>
                        <div className="col-lg-12 col-xl-7 p-4  p-lg-0 pl-lg-3">
                            <div className="title-one">
                                <h2>{this.props.title}</h2>
                            </div>
                            <p>ADDRESS :{this.props.address} </p>
                            <p>MOBILE NO : {this.props.mobile}</p>
                            <p>EMAIL : {this.props.email}</p>
                            <ul className="list-unstyled">
                                <li className="d-inline pr-2"><img className="img-fluid"  src={require('./images/fb.png')} alt="Facebook"/></li>
                                <li className="d-inline pr-2"><img className="img-fluid" src={require('./images/tw.png')} alt="Twitter"/></li>
                                <li className="d-inline"><img className="img-fluid" src={require('./images/inta.png')} alt="Instagram"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        
	    );
    }
}
Footer.defaultProps = {
    title:'Contact us',
  address:'XYZ, GUJARAT, INDIA.',
  mobile:'+ 91 123456789',
  email:'xyz@mail.com',
  footerimage: 'images/contact.png',
}
export default Footer;