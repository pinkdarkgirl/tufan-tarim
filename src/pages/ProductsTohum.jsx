// image import
import { TOHUM_IMAGES } from "../images/Images";
import arrow from "../assets/icons/arrow.svg";

// rrd import
import { useNavigate } from "react-router-dom";

function ProductsTohum() {
  const navigate = useNavigate();

  const imageSources = [
    TOHUM_IMAGES.yuksel,
    TOHUM_IMAGES.fito,
    TOHUM_IMAGES.asgen,
  ];

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="product-section-container">
      <button onClick={handleClick} className="back-btn">
        <img src={arrow} alt="back" />
      </button>
      <h2>
        <span>Hasadın Temeli:</span> Güçlü Fideler ve Kaliteli Tohumlar
      </h2>
      <p>
        Tarımsal üretimde en önemli adımlardan biri, doğru fide ve tohum
        seçimidir. En iyi markaların, her türlü iklime ve araziye uygun fide ve
        tohumlarını sizlere sunuyoruz. Domates, biber, salatalık, patlıcan gibi
        sebzelerden, meyve ağaçlarına kadar geniş bir yelpazede ürünlerimiz
        mevcuttur.
      </p>
      <h3>İşbirliği Yaptığımız Güvenilir Markalar:</h3>
      <div className="product-image-container">
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`image ${index + 1}`}
            className="product-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsTohum;
