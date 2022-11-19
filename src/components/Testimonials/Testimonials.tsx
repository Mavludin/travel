import { useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import test1 from '../../assets/img/testimonial-1.jpg';
import test2 from '../../assets/img/testimonial-2.jpg';
import test3 from '../../assets/img/testimonial-3.jpg';
import test4 from '../../assets/img/testimonial-4.jpg';
import OwlCarousel from 'react-owl-carousel';

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
    <div className='container-fluid py-5'>
      <div className='container py-5'>
        <div className='text-center mb-3 pb-3'>
          <h6
            className='text-primary text-uppercase'
            style={{ letterSpacing: 5 }}
          >
            Testimonial
          </h6>
          <h1>What Say Our Clients</h1>
        </div>
        <OwlCarousel className='owl-carousel testimonial-carousel'>
          <div className='text-center pb-4'>
            <img
              className='img-fluid mx-auto'
              src={test1}
              style={{ width: 100, height: 100 }}
            />
            <div className='testimonial-text bg-white p-4 mt-n5'>
              <p className='mt-5'>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h5 className='text-truncate'>Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <div className='text-center'>
            <img
              className='img-fluid mx-auto'
              src={test2}
              style={{ width: 100, height: 100 }}
            />
            <div className='testimonial-text bg-white p-4 mt-n5'>
              <p className='mt-5'>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h5 className='text-truncate'>Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <div className='text-center'>
            <img
              className='img-fluid mx-auto'
              src={test3}
              style={{ width: 100, height: 100 }}
            />
            <div className='testimonial-text bg-white p-4 mt-n5'>
              <p className='mt-5'>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h5 className='text-truncate'>Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
          <div className='text-center'>
            <img
              className='img-fluid mx-auto'
              src={test4}
              style={{ width: 100, height: 100 }}
            />
            <div className='testimonial-text bg-white p-4 mt-n5'>
              <p className='mt-5'>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h5 className='text-truncate'>Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
