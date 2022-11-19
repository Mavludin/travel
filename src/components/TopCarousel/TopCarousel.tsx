import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { NextArrow } from "../NextArrow/NextArrow";
import { PrevArrow } from "../PrevArrow/PrevArrow";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    subTitle: 'Tours & Travel',
    title: "Let's Discover The World Together",
    imgSrc: require('../../assets/img/carousel-1.jpg'),
  },
  {
    id: 2,
    subTitle: 'Tours & Travel',
    title: 'Discover Amazing Places With Us',
    imgSrc: require('../../assets/img/carousel-2.jpg'),
  },
]

export const TopCarousel = () => {

  const [currentItem, setCurrentItem] = useState(0);

  const goToNext = () => {
    setCurrentItem((c) => {
      if (c === 1) {
        return 0
      };

      if (c === 0) {
        return 1
      }

      return c + 1;
    })
  };

  const goToPrev = () => {
    setCurrentItem((c) => {
      if (c === 1) {
        return 0
      };

      if (c === 0) {
        return 1
      }

      return c - 1;
    })
  };

  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            renderArrowPrev={() => <PrevArrow goToPrev={goToPrev} />}
            renderArrowNext={() => <NextArrow goToNext={goToNext} />}
            renderIndicator={() => null}
            onChange={(e) => console.log(e)}
            width="100%"
            selectedItem={currentItem}
          >
            {CAROUSEL_ITEMS.map((item, index) => {
              return (
                <div
                  className={`carousel-item ${
                    index === currentItem ? "active" : ""
                  }`}
                  key={item.id}
                >
                  <CarouselItem
                    key={item.id}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    subTitle={item.subTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
