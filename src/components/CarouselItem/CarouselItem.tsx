type Props = {
  imgSrc: string;
  subTitle: string;
  title: string;
};


export const CarouselItem = ({ imgSrc, title, subTitle }: Props): JSX.Element => {
  return (
    <>
      <img className="w-100" src={imgSrc} alt="Image1" />
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3" style={{ maxWidth: 900 }}>
          <h4 className="text-white text-uppercase mb-md-3">{subTitle}</h4>
          <h1 className="display-3 text-white mb-md-4">
            {title}
          </h1>
          
          <a className="btn btn-primary py-md-3 px-md-5 mt-2 sliderBtn">
            Куда едем?
          </a>
        </div>
      </div>
    </>
  );
}
