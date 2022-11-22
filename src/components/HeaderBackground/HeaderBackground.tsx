import { DownOutlined } from '@ant-design/icons';
import img from '../../assets/img/carousel-3.jpg';

type Props = {
  scrollToBooking: () => void;
};

export const HeaderBackground = ({ scrollToBooking }: Props): JSX.Element => {
  return (
    <>
      <img className='w-100' src={img} alt='Image1' />
      <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
        <div className='p-3' style={{ maxWidth: 900 }}>
          <h4 className='text-white text-uppercase mb-md-3'>
            Оптимальные маршруты
          </h4>
          <h1 className='display-3 text-white mb-md-4'>
            Путешествие по Дагестану
          </h1>
          <a
            onClick={scrollToBooking}
            className='btn btn-primary py-md-3 px-md-5 mt-2 sliderBtn'
          >
            <div className='d-flex align-items-center'>
              <span className='pr-3'>Поехали</span>
              <DownOutlined />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
