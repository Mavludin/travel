import img2 from '../../assets/img/destination-3.jpg';
import aboutImg from '../../assets/img/destination-5.jpg';

export const About = () => {
  return (
    <>
      <div className='container-fluid py-4'>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-lg-6' style={{ minHeight: 500 }}>
              <div className='position-relative h-100'>
                <img
                  className='position-absolute w-100 h-100'
                  src={aboutImg}
                  style={{ objectFit: 'cover' }}
                  alt=''
                />
              </div>
            </div>
            <div className='col-lg-6 pt-5 pb-lg-5'>
              <div className='about-text bg-white p-4 p-lg-5 my-lg-5'>
                <h6
                  className='text-primary text-uppercase'
                  style={{ letterSpacing: 5 }}
                >
                  О нас
                </h6>
                <h1 className='mb-3'>Путешествуй без границ</h1>
                <p>Вместе с нами будет намного легче!</p>
                <div className='mb-4 d-flex justify-content-center'>
                  <div className='col-11'>
                    <img className='img-fluid' src={img2} alt='' />
                  </div>
                </div>
                <a href='/' className='btn btn-primary mt-1'>
                  Поехали!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid pb-5'>
        <div className='container pb-5 pt-5'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='d-flex mb-4 mb-lg-0'>
                <div
                  className='d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3'
                  style={{ height: 100, width: 100 }}
                >
                  <i className='fa fa-2x fa-money-check-alt text-white'></i>
                </div>
                <div className='d-flex flex-column'>
                  <h5 className=''>Доступно</h5>
                  <p className='m-0'>
                    С нами можно спланировать отпуск на любой бюджет
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex mb-4 mb-lg-0'>
                <div
                  className='d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3'
                  style={{ height: 100, width: 100 }}
                >
                  <i className='fa fa-2x fa-award text-white'></i>
                </div>
                <div className='d-flex flex-column'>
                  <h5 className=''>Удобно</h5>
                  <p className='m-0'>
                    Наш сервис позволяет максимально быстро и просто получить
                    ответы
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex mb-4 mb-lg-0'>
                <div
                  className='d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3'
                  style={{ height: 100, width: 100 }}
                >
                  <i className='fa fa-2x fa-globe text-white'></i>
                </div>
                <div className='d-flex flex-column'>
                  <h5 className=''>Надежно</h5>
                  <p className='m-0'>
                    Нас выбирают путешественники со всеx уголков России
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
