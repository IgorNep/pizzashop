import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pizzaImg from '../assets/img/pizza1.jfif';
import pizzaImg2 from '../assets/img/pizza2.jfif';
import pizzaImg3 from '../assets/img/pizza3.jfif';
import pizzaImg4 from '../assets/img/pizza4.jfif';
import { Link } from 'react-router-dom';

const SliderComponent = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          position: 'absolute',
          top: '200px',
          right: '20px',
          zIndex: '999',
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          position: 'absolute',
          top: '200px',
          left: '20px',
          zIndex: '999',
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slideShow: 1,
    slideToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          padding: '10px',
          position: 'absolute',
          bottom: '10px',
          color: '#fff',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: '30px',
    //       color: '#fff',
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="slide-box">
          <Link to="/deal/pizza">
            <h3>1</h3>
            <img src={pizzaImg} alt="pizza" className="slide" />
            <div className="overlay"></div>
          </Link>
        </div>
      </div>
      <div>
        <div className="slide-box">
          <Link to="/deal/pasta">
            <h3>2</h3>
            <img src={pizzaImg2} alt="pizza" className="slide" />
            <div className="overlay"></div>
          </Link>
        </div>
      </div>
      <div>
        <div className="slide-box">
          <Link to="/deal/salad">
            <h3>3</h3>
            <img src={pizzaImg3} alt="pizza" className="slide" />
            <div className="overlay"></div>
          </Link>
        </div>
      </div>
      <div>
        <div className="slide-box">
          <Link to="/deal/pizza">
            <h3>4</h3>
            <img src={pizzaImg4} alt="pizza" className="slide" />
            <div className="overlay"></div>
          </Link>
        </div>
      </div>
      <div>
        <div className="slide-box">
          <Link to="/deal/pasta">
            <h3>5</h3>
            <img src={pizzaImg3} alt="pizza" className="slide" />
            <div className="overlay"></div>
          </Link>
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
