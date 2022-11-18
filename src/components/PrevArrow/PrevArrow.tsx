type Props = {
  goToPrev: () => void;
};

export const PrevArrow = ({ goToPrev }: Props): JSX.Element => {
  return (
    <button onClick={goToPrev} className="carousel-control-prev" data-slide="prev">
      <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
        <span className="carousel-control-prev-icon mb-n2"></span>
      </div>
    </button>
  );
}
