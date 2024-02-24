// library import
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

// data import
import { PRODUCTS } from "../CokSatanlar.jsx";

import "./ProductsHome.css";

function ProductsHome() {
  const productsData = [
    PRODUCTS.admiral,
    PRODUCTS.altacor,
    PRODUCTS.uphold,
    PRODUCTS.gredi,
    PRODUCTS.deltharin,
    PRODUCTS.knockOut,
    PRODUCTS.signum,
    PRODUCTS.regev,
    PRODUCTS.ritreap,
    PRODUCTS.bellis,
    PRODUCTS.lusen,
    PRODUCTS.collis,
    PRODUCTS.durduran,
    PRODUCTS.sequestrene,
    PRODUCTS.vitaseve,
    PRODUCTS.sinergon,
    PRODUCTS.neemarin,
    PRODUCTS.sulfacid,
    PRODUCTS.peters,
    PRODUCTS.nipo,
  ];

  return (
    <div className="carousel-container">
      <h2 className="intro-text-title home">ÇOK SATANLAR</h2>
      <div>
        <Splide
          options={{
            perPage: 3,
            rewind: true,
            gap: "3em",
            perMove: 1,
            breakpoints: {
              1150: {
                perPage: 2,
              },
            },
          }}
        >
          {productsData.map((product) => (
            <SplideSlide key={product.name}>
              <div className="slide-image-container">
                <img src={product.img} className="slide-image" />
              </div>
              <h4 className="home-product-title">{product.name}</h4>
              <p className="home-product-text">{product.type}</p>
            </SplideSlide>
          ))}
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </div>
  );
}

export default ProductsHome;
