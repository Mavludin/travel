import dest1 from '../../assets/img/destination-1.jpg';
import dest2 from '../../assets/img/destination-2.jpg';
import dest3 from '../../assets/img/destination-3.jpg';
import dest4 from '../../assets/img/destination-4.jpg';
import dest5 from '../../assets/img/destination-5.jpg';
import dest6 from '../../assets/img/destination-6.jpg';

export const Destinations = () => {
  return (
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src={dest1} alt="" />
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">United States</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src={dest2} alt="" />
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">United Kingdom</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src={dest3} alt="" />
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Australia</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src={dest4} alt="" />
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">India</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src={dest5} alt="" />
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">South Africa</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src={dest6} alt="" />
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Indonesia</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
