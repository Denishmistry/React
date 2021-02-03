import React from 'react';

class Pricing extends React.Component {
    constructor(props) {
    super(props);
    this.pricing =[
        {id: 1, title: 'Spa Light', price: '50', plist : ['Body Hand and Foot Massage','Nail Cutting And Styling', 'Spa Therapy', 'Hair Coloring'],},
        {id: 2, title: 'oil massag', price: '80', plist: ['Body Hand and Foot Massage','Nail Cutting And Styling', 'Spa Therapy', 'Hair Coloring'],},
        {id: 3, title: 'Spa & Beauty', price: '100', plist:['Body Hand and Foot Massage','Nail Cutting And Styling', 'Spa Therapy', 'Hair Coloring'],},
    ]
  }
   render(){
		return(	
	   <section id="pricing" >
            <div className="container">
                <div className="title-two mb-4">
                    <h2>our pricing</h2>
                </div>
                <div className="row">         
                     {this.pricing.map((post)=>
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
                         )}
                </div>
            </div>
        </section>
	    );
    }
}

export default Pricing;