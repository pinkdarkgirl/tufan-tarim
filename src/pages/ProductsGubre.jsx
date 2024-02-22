// image import
import { GUBRE_IMAGES } from "../images/Images";
import arrow from "../assets/icons/arrow.svg";

// rrd import
import { useNavigate } from "react-router-dom";

function ProductsGubre() {
  const navigate = useNavigate();

  const imageSources = [
    GUBRE_IMAGES.valagro,
    GUBRE_IMAGES.timac,
    GUBRE_IMAGES.altintar,
    GUBRE_IMAGES.igsas,
    GUBRE_IMAGES.haifa,
    GUBRE_IMAGES.fors,
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
        <span>Toprağınızı Besleyin:</span> Gübre ve Besin Takviyeleri
      </h2>
      <p>
        Verimli bir tarım için sağlıklı ve besin açısından zengin toprak
        şarttır. Gübre ve besin takviyeleri ile toprağınızı besleyerek,
        ürünlerinizin daha güçlü ve sağlıklı büyümesini sağlayabilirsiniz.
        Organik gübre, kimyasal gübre, mikro besin takviyeleri gibi farklı
        seçeneklerimiz mevcuttur.
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

export default ProductsGubre;
