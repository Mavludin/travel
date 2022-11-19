import { useState } from "react";

import test1 from "../../assets/img/testimonial-1.jpg";
import test2 from "../../assets/img/testimonial-2.jpg";
import test3 from "../../assets/img/testimonial-3.jpg";
import test4 from "../../assets/img/testimonial-4.jpg";
import OwlCarousel from "react-owl-carousel";

export const Testimonials = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const goToNext = () => {
    setCurrentItem((c) => {
      if (c === 1) {
        return 0;
      }

      if (c === 0) {
        return 1;
      }

      return c + 1;
    });
  };

  const goToPrev = () => {
    setCurrentItem((c) => {
      if (c === 1) {
        return 0;
      }

      if (c === 0) {
        return 1;
      }

      return c - 1;
    });
  };

  return (
    <div className="container-fluid py-4">
      <div className="container py-4">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            ОТЗЫВЫ
          </h6>
          <h1>Наши клиенты</h1>
        </div>
        <OwlCarousel
          className="testimonial-carousel"
          dots
          loop
          smartSpeed={1500}
          margin={30}
          dotClass="owl-dot"
          autoPlay
          center
          responsive={{
            0: {
              items: 1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          }}
        >
          <div className="text-center pb-4">
            <img
              className="img-fluid mx-auto"
              src={test1}
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-white p-4 mt-n5">
              <p className="mt-5">
                Большое спасибо за оказанную услугу. И до новых встреч.
              </p>
              <h5 className="text-truncate">Денис Игнатов</h5>
            </div>
          </div>
          <div className="text-center">
            <img
              className="img-fluid mx-auto"
              src={test2}
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-white p-4 mt-n5">
              <p className="mt-5">
                Хочу сказать спасибо за то, что вы помогаете людям в их
                проблемах.
              </p>
              <h5 className="text-truncate">Виктория Лукина</h5>
            </div>
          </div>
          <div className="text-center">
            <img
              className="img-fluid mx-auto"
              src={test3}
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-white p-4 mt-n5">
              <p className="mt-5">
                Рад, что воспользовался услугами данного сайта.
              </p>
              <h5 className="text-truncate">Тимур Зимин</h5>
            </div>
          </div>
          <div className="text-center">
            <img
              className="img-fluid mx-auto"
              src={test4}
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-white p-4 mt-n5">
              <p className="mt-5">
                Всем советую обращаться в эту компанию, не пожалеете.
              </p>
              <h5 className="text-truncate">Макар Васильев</h5>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
