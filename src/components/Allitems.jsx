import "./allitem.css";
import { Link } from "react-router-dom";
import img2 from "../img/puma-reebok-min50-banner.avif";
import img3 from "../img/women-KianaHouseoffashion-MIN50.jpg";
import img4 from "../img/Cloth-Britishclub-Under699.webp";
import img5 from "../img/sumglasses-lovemoschino-min50.avif";
import img6 from "../img/sportswear-Nike-ADidas-Min35.webp";
import img7 from "../img/homedecor-urbanspace-mafatlal-flat60.avif";
// import img8 from "../img/card-upper-Sunkissed strip.webp";
import img9 from "../img/card-puma-uspa-min50.avif";
import img10 from "../img/card-watch-sonata-fastrack-upto30.avif";
import img11 from "../img/card-women-gulmoharjaipur-avaasa-min60.avif";
import img12 from "../img/cards-thebearhouse-min50.avif";

const Allitems = () => {
  return (
    <>
      <div>
        <div id="shop-Offers">
          <div className="head">
            <h1 className="heading">
              <span>F</span>resh In Fashion
            </h1>
          </div>

          <div className="offer-cards">
            {/* <div className="top-banner">
              <Link to="/">
                <img src={img1} className="top-banner" alt="banner" />
              </Link>
              <h1>Fresh In Fashion</h1>
            </div> */}
            {/* //////////////////////////////////////// */}
            <div className="banner-grid">
              <div className="top-left grid-img">
                <Link to="/">
                  <img src={img2} className="grid-img" alt="banner" />
                </Link>
              </div>
              <div className="top-right grid-img">
                <Link>
                  <img src={img3} className="grid-img" alt="banner" />
                </Link>
              </div>

              <div className="middle-left grid-img">
                <Link>
                  <img src={img4} className="grid-img" alt="banner" />
                </Link>
              </div>

              <div className="middle-left grid-img">
                <Link>
                  <img src={img5} className="grid-img" alt="banner" />
                </Link>
              </div>

              <div className="bottom-left grid-img">
                <Link>
                  <img src={img6} className="grid-img" alt="banner" />
                </Link>
              </div>

              <div className="bottom-right grid-img">
                <Link>
                  <img src={img7} className="grid-img" alt="banner" />
                </Link>
              </div>
            </div>
            <div className="top-banner">
              <div className="head2">
                <h1 className="heading2">
                  <span>B</span>est Deal
                </h1>
              </div>
              {/* <Link>
                <img src={img8} className="grid-img" alt="banner" />
              </Link> */}
            </div>
            <div className="discounted-cards">
              <div className="cards-grid">
                <div className="first card-img">
                  <Link>
                    <img src={img9} className="grid-img" alt="banner" />
                  </Link>
                </div>

                <div className="second card-img">
                  <Link>
                    <img src={img10} className="grid-img" alt="banner" />
                  </Link>
                </div>
                <div className="third card-img">
                  <Link>
                    <img src={img11} className="grid-img" alt="banner" />
                  </Link>
                </div>
                <div className="fourth card-img">
                  <Link>
                    <img src={img12} className="grid-img" alt="banner" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allitems;
