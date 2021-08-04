import React, { useState } from 'react'
import './Home.css'

import Img1 from '../../Imgs/1.jpg'
import Img2 from '../../Imgs/2.jpg'
import Img3 from '../../Imgs/3.jpg'

import { CarouselIndicators, CarouselItem, Carousel } from 'reactstrap'

const items = [
  {
    src : Img1,
    caption : 'summer collection 2021'
  },
  {
    src : Img2,
    caption : 'wooden minimalist 2021'
  },
  {
    src : Img3,
    caption : 'busness of mobile app'
  }
]

export const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='w-100 slide-img' />
        <div className="carousel-caption">
          <h4 className='red blue green black'> { item.caption } </h4>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
}