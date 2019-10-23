import React from "react";
import Slider from "react-slick";
import {Container} from './styled'


class MiSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      news: props.news
    }
    
  }
  render() {
    const newsSlider = this.state.news.slice(0,3)
    const destacadas = newsSlider.map(destacada =>{
     
      return (
        <Container>
          <div className="divSlider">
            <div className="fondo"></div>
              <img className="fotoSlider" src={destacada.img_url}/>
            <div className="tituloSlider">{destacada.title}</div>
          </div>
        </Container>
      )

    })
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
          {destacadas}
      </Slider>
    );
  }
}
export default MiSlider