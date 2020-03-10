import React from 'react'
import Slider from 'react-slick'
import {connect} from 'react-redux'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Important to set dots to false, caused some weird issues
// slidesToShow set to 4 instead of 5, if there were only 4 cast members, the slider would collapse

class CastSlider extends React.Component {
    render() {        
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            swipeToSlide: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
          }

      return (
            <Slider {...settings}>
                {this.props.cast.length === 0 ? <div>Loading...</div> : this.props.cast.map((cast) => {
                    return (
                        <a key={cast.id}>
                            <img key={cast.id} className="movie__cast--img" src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`} alt={`Photo of ${cast.name}`}></img>
                        </a> 
                    )
                    })  
                }                                        
            </Slider>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        cast: state.cast
    }
}

const ConnectedCastSlider = connect(mapStateToProps)(CastSlider)

export default ConnectedCastSlider