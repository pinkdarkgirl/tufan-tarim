// library import
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// data import
import { PRODUCTS } from "../CokSatanlar.jsx";

import "./ProductsHome.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktopsm: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProductsHome() {
  const productsData = [
    PRODUCTS.nipocalcio,
    PRODUCTS.vitaseve,
    PRODUCTS.master,
    PRODUCTS.polyfeed,
    PRODUCTS.peters,
    PRODUCTS.blackjack,
    PRODUCTS.folex,
    PRODUCTS.acticomfors,
    PRODUCTS.actiwave,
    PRODUCTS.mcextra,
    PRODUCTS.viva,
  ];

  return (
    <div>
      <h2 className="intro-text-title home">ÇOK SATANLAR</h2>
      <div>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          infinite
          autoPlay
          autoPlaySpeed={3000}
        >
          {productsData.map((product, index) => (
            <div key={index} className="product-carousel-item">
              <div className="carousel-image-container">
                <img src={product.img} className="carousel-image" />
              </div>
              <div className="carousel-text-container">
                <h4>{product.name}</h4>
                <p>{product.label}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductsHome;
