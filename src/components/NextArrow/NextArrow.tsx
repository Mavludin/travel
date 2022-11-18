type Props = {
  goToNext: () => void;
};

export const NextArrow = ({ goToNext }: Props): JSX.Element => {
  return (
    <button onClick={goToNext} className="carousel-control-next" data-slide="next">
      <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
        <span className="carousel-control-next-icon mb-n2"></span>
      </div>
    </button>
  );
}
