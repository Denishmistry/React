function About(props) {
  return (

        <div className="container" >
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-8 about p-2 p-md-5">
                    <div className="row justify-content-lg-center justify-content-xl-end">
                        <div className="about-image">
                            <img className="img-fluid" src={props.aboutimage} alt="About US IMAGE" />
                        </div>
                        <div className="col-lg-12 col-xl-7">
                            <div className="title-one">
                                <h2>{props.title}</h2>
                            </div>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




  );
}


const about = {
  aboutimage: 'images/about.jpg',
  title:'About us',
  text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
};



ReactDOM.render(

  <About
    aboutimage={about.aboutimage}
    title={about.title}
    text={about.text}
  />,
  document.getElementById('about')
);
// About Us Section End


function Pricing(props) {
  const content = props.pricing.map((post) =>
     <div  key={post.id} className="col-md-6 col-lg-4 col-sm-12">
        <div className="pricing text-center mt-4">
            <div className="pricing-header text-center text-uppercase p-4">
                <h2 className="mt-3">{post.title}</h2>
                <h1 ><i className="fas fa-dollar-sign pr-1"></i>{post.price}</h1>
            </div>
            <ul className="list-unstyled mt-4">
                {post.plist.map((cart_list,index) => { 
                    return(<li  key={index}>{cart_list}</li>); 
                })} 
            </ul>
           
            <a className="theme-btn mb-5" href="#!">BUY NOW</a>
        </div>
    </div>
  );
 /*Index for avoiding Key dublication*/
  return (
          <div className="container">
            <div className="title-two mb-4">
                <h2>our pricing</h2>
            </div>
            <div className="row">
                {content}
            </div>
        </div>
  );
}




const pricing =[
  {id: 1, title: 'Spa Light', price: '50', plist : ['Body Hand and Foot Massage','Nail Cutting And Styling', 'Spa Therapy', 'Hair Coloring'],},
  {id: 2, title: 'oil massag', price: '80', plist: ['Body Hand and Foot Massage','Nail Cutting And Styling', 'Spa Therapy', 'Hair Coloring'],},
  {id: 3, title: 'Spa "&amp;" Beauty', price: '100', plist:['Body Hand and Foot Massage','Nail Cutting And Styling', 'Spa Therapy', 'Hair Coloring'],},
];

  


ReactDOM.render(
  <Pricing pricing={pricing} />,
  document.getElementById('pricing')
);

// home section 



function Home(props) {

  return (
    <div  className="home d-flex flex-column">
        <div className="home-text my-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12">
                        <h3>{props.stitle}</h3>
                        <h1 style={{ width: '50%' }} >{props.maintitle}</h1>
                        <a className="theme-btn" href="#!">MORE DETAIL</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}




const home ={
    stitle:'Welcome To Luxury Spa',
    maintitle:'choose best package for your beauty',
}

  


ReactDOM.render(
  <Home
   stitle={home.stitle}
   maintitle={home.maintitle} 
   />,
  document.getElementById('home')
);

//contact us

function Footer(props) {
  return (
    <footer  className="alt-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-8 about p-2 p-md-5">
                    <div className="row justify-content-lg-center justify-content-xl-end">
                        <div className="about-image">
                            <img className="img-fluid" src={props.footerimage} alt="Contact US IMAGE"/>
                        </div>
                        <div className="col-lg-12 col-xl-7 p-4  p-lg-0 pl-lg-3">
                            <div className="title-one">
                                <h2>{props.title}</h2>
                            </div>
                            <p>ADDRESS :{props.address} </p>
                            <p>MOBILE NO : {props.mobile}</p>
                            <p>EMAIL : {props.email}</p>
                            <ul className="list-unstyled">
                                <li className="d-inline pr-2"><img className="img-fluid" src="images/fb.png" alt="Facebook"/></li>
                                <li className="d-inline pr-2"><img className="img-fluid" src="images/tw.png" alt="Twitter"/></li>
                                <li className="d-inline"><img className="img-fluid" src="images/inta.png" alt="Instagram"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

  );
}


const footer = {
  title:'Contact us',
  address:'XYZ, GUJARAT, INDIA.',
  mobile:'+ 91 123456789',
  email:'xyz@mail.com',
  footerimage: 'images/contact.png',
};



ReactDOM.render(

  <Footer  
    title={footer.title}
    address={footer.address}
    mobile={footer.mobile}
    email={footer.email}
    footerimage={footer.footerimage}
  />,
  document.getElementById('contact')
);




//navabar
function NavBar(props) {

 const navlist = props.links.map((list,index) =>

                    <a className="nav-item nav-link active" key={index} href={list.linkTo}>{list.text}</a>
    );
  return (
    <nav id="navbar-example" className="navbar navbar-expand-md navbar-light sticky-top">
        <div className="container">
            <a className="navbar-brand logo" href="#!"><img className="img-fluid" src="images/logo.png" alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                  {navlist}
                </div>
            </div>
        </div>
    </nav>
  );
}


const links  =[{linkTo: "#home", text: "Home"},{linkTo: "#about", text: "About"},{linkTo: "#gallery", text: "Gallery"},{linkTo: "#pricing", text: "Pricing"},{linkTo: "#contact", text: "contact"}] ;



ReactDOM.render(

  <NavBar  
    links={links}
  />,
  document.getElementById('navbar')
);


function HeaderTop(props) {
  return (
    <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 d-flex justify-content-end">
                    <a href="#!">Mobile no :{props.mobile}</a>
                    <a href="#!">Email :{props.mail}</a>
                </div>
            </div>
        </div>
    </div>
  );
}


const header_top = { 
    mobile:'+91 123456789',
    mail:'xyz@mail.com',
};

ReactDOM.render(
  <HeaderTop  
    mobile={header_top.mobile}
    mail={header_top.mail}
  />,
  document.getElementById('header-top')
);


//======================

// function Gallery(props) {

//  const imglist = props.images.map((list,index) =>

//         <div key={index} className= {list.catagory} data-category={list.catagory2}>
//                     <a key={index} href={list.linkTo}>
//                         <img key={index} className="img-fluid" src={list.linkTo}/>
//                     </a>
//                 </div>
//     );
       
//   return (
//       <section className="gallery alt-bg">
//         <div className="container text-center">
//             <div className="title-two mb-4">
//                 <h2>our Gallery</h2>
//             </div>
//             <div className="row grid mb-5">
//                {imglist}
//             </div>
//         </div>
//     </section>
//   );
// }


// const images =[{linkTo: "images/gallery1.png" , catagory:'col-6 col-md-3 grid-item mb-3 hair', catagory2:'hair'},
// {linkTo: "images/gallery2.png", catagory:'col-6 col-md-3 grid-item mb-3 hair', catagory2:'hair'},
// {linkTo: "images/gallery3.png", catagory:'col-6 col-md-3 grid-item mb-3 facial', catagory2:'facial'},
// {linkTo: "images/gallery4.png", catagory:'col-6 col-md-3 grid-item mb-3 makeup', catagory2:'makeup'},
// {linkTo: "images/gallery5.png", catagory:'col-6 col-md-3 grid-item mb-3 hair', catagory2:'hair'},
// {linkTo: "images/gallery6.png", catagory:'col-6 col-md-3 grid-item mb-3 makeup ', catagory2:'makeup'},
// {linkTo: "images/gallery7.png", catagory:'col-6 col-md-3 grid-item mb-3 hair', catagory2:'hair'},
// {linkTo: "images/gallery8.png", catagory:'col-6 col-md-3 grid-item mb-3 facial',catagory2:'facial'}];

// ReactDOM.render(
//   <Gallery 
//     images={images}
//   />,
//   document.getElementById('gallery')
// );



ReactDOM.render(
    <div className="container clearfix">
       <div className="filters filter-button-group">
          <ul><h4>
            <li className="active" data-filter="*">All</li>
            <li data-filter=".webdesign">Web Design</li>
            <li data-filter=".webdev">Web Development</li>
            <li data-filter=".brand">Brand Identity</li>
          </h4></ul>
        </div>
        <div className="row">
       
     

        <div className="content grid">
          <div className="single-content webdesign brand grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean Eats" src="images/gallery1.png"/>
                </a>
          </div>
            <div className="single-content webdev grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean Eats" src="images/gallery2.png"/>
                </a>
          </div>
            <div className="single-content webdev grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean Eats" src="images/gallery3.png"/>
                </a>
          </div>
            <div className="single-content webdev grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean Eats" src="images/gallery4.png"/>
                </a>
          </div>
         <div className="single-content  webdev grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean Eats" src="images/gallery5.png"/>
                </a>
          </div>
            <div className="single-content webdesign webdev grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean brand" src="images/gallery6.png"/>
                </a>
          </div>
            <div className="single-content webdesign webdev grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean brand" src="images/gallery7.png"/>
                </a>
          </div>
            <div className="single-content webdesign webdev grid-item">
                <a href="#!" target="_blank">
                    <img className="p2" alt="Clean Eats" src="images/gallery8.png"/>
                </a>
          </div>
        </div>
      </div>
    </div>,
        

  document.getElementById('gallery')
);


