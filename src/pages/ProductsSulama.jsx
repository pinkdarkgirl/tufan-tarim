// image import
import { SULAMA_IMAGES } from "../images/Images";
import arrow from "../assets/icons/arrow.svg";

// rrd import
import { useNavigate } from "react-router-dom";

function ProductsSulama() {
  const navigate = useNavigate();

  const imageSources = [SULAMA_IMAGES.panplast, SULAMA_IMAGES.akkus];

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="product-section-container">
      <button onClick={handleClick} className="back-btn">
        <img src={arrow} alt="back" />
      </button>
      <h2>
        <span>Suyun Gücünü Tarlanıza Taşıyın:</span> Verimli ve Modern Sulama
        Sistemleri
      </h2>
      <p>
        Her damla değerlidir! Su tasarrufu sağlayan, her türlü araziye ve ürüne
        uygun sulama sistemleri ile tanışın. Damla sulama, yağmurlama sulama,
        mikro sulama gibi farklı seçenekler arasından ihtiyacınıza en uygun
        sistemi seçin.
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

export default ProductsSulama;
