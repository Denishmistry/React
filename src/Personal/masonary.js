import * as React from 'react';
import Masonry from 'react-masonry-component';
 
const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
       constructor(props) {
            super(props);
            this.elements =[require("./images/gallery1.png"),
                            require("./images/gallery2.png"),
                            require("./images/gallery3.png"),
                            require("./images/gallery4.png"),
                            require("./images/gallery5.png"),
                            require("./images/gallery6.png"),
                            require("./images/gallery7.png"),
                            require("./images/gallery8.png"),]
        }

    render() {
        const childElements = this.elements.map((element, index)=> {
           return (

                <div key={index} className="image-element-class col-sm-4">
                    <img className="img-fluid" src ={element}  alt="a" />
                </div>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class container'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
           
                <div className="row">
                     {childElements}
                </div>
            
               
            </Masonry>
        );
    }
}
 
export default Gallery;