//Import components
import Slider from 'react-slick'

//Import styles
import 'styles/components/home/portfolio.scss'

//Import styles react-slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//Import images
import {
  AiFillBehanceCircle,
  AiFillCodepenCircle,
  AiFillGithub,
} from 'react-icons/ai'
import sliderImage from 'images/sliderImage.png'

export default function Portfolio() {
  //Slider configurations
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'custom-dots',
    adaptiveHeight: true,
  }

  const sliderArr = [
    {
      id: 1,
      img: sliderImage,
      title: 'Udazzy',
      subTitle:
        'UDAZZY is here to help YOU find the BEST parties and connect with the coolest people in the city of your choosing. We’re here to give YOU the opportunity to be yourself and connect with other likeminded party-goers',
    },
    {
      id: 2,
      img: sliderImage,
      title: 'Udazzy',
      subTitle: 'UDAZZY is here to help YOU find',
    },
    {
      id: 3,
      img: sliderImage,
      title: 'Udazzy',
      subTitle: 'UDAZZY is here to help YOU find the BEST',
    },
    {
      id: 4,
      img: sliderImage,
      title: 'Udazzy',
      subTitle:
        'UDAZZY is here to help YOU find the BEST parties and connect with the coolest people in the city of your choosing. We’re here to give YOU the opportunity to be yourself and connect with other likeminded party-goers',
    },
    {
      id: 5,
      img: sliderImage,
      title: 'Udazzy',
      subTitle:
        'UDAZZY is here to help YOU find the BEST parties and connect with the coolest people in the city of your choosing. We’re here to give YOU the opportunity to be yourself and connect with other likeminded party-goers',
    },
  ]

  return (
    <section className='portfolio'>
      <div className='header'>
        <div>
          <h3>PORTFOLIO</h3>
          <p>
            Explore our diverse portfolio to find the perfect solution for you.
          </p>
        </div>
        <div className='icons'>
          <p>More of our projects {'=>'}</p>
          <AiFillBehanceCircle />
          <AiFillGithub />
          <AiFillCodepenCircle />
        </div>
      </div>
      <div>
        <div className='slider'>
          <Slider {...settings}>
            {sliderArr.map(item => (
              <div
                className='slide'
                key={item.id}>
                <img
                  src={item.img}
                  alt='image-slide'
                />
                <div className='slider-description-mobile'>
                  <p>{item.title}</p>
                  {item.subTitle.length > 120 ? (
                    <p>
                      {item.subTitle.slice(0, 120)} <a>. . . Read more</a>
                    </p>
                  ) : (
                    <p>{item.subTitle}</p>
                  )}
                </div>
                <div className='slider-description-desktop'>
                  <p>{item.title}</p>
                  <p>{item.subTitle}</p>
                  <button>Read more</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
