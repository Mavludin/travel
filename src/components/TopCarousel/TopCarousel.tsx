import { HeaderBackground } from '../HeaderBackground/HeaderBackground';

type Props = {
  scrollToBooking: () => void;
};

export const TopCarousel = ({ scrollToBooking }: Props): JSX.Element => {
  return (
    <div className='container-fluid p-0'>
      <div id='header-carousel' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>
          <HeaderBackground scrollToBooking={scrollToBooking} />
        </div>
      </div>
    </div>
  );
};
