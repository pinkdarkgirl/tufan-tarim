// image import
import { ILAC_IMAGES } from "../images/Images";
import arrow from "../assets/icons/arrow.svg";

// rrd import
import { useNavigate } from "react-router-dom";

function ProductsIlac() {
  const navigate = useNavigate();

  const imageSources = [
    ILAC_IMAGES.bayer,
    ILAC_IMAGES.syngenta,
    ILAC_IMAGES.basf,
    ILAC_IMAGES.corteva,
    ILAC_IMAGES.upl,
    ILAC_IMAGES.adama,
    ILAC_IMAGES.hektas,
    ILAC_IMAGES.ferbis,
    ILAC_IMAGES.sunset,
    ILAC_IMAGES.dogal,
    ILAC_IMAGES.astronova,
    ILAC_IMAGES.safa,
    ILAC_IMAGES.ertar,
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
        <span>Hasatınıza Güç Katın:</span> Verimi Artıran Zirai İlaçlar
      </h2>
      <p>
        Tarımsal üretimde zirveye ulaşmak için tarlanızı korumak ve
        ürünlerinizin sağlıklı büyümesini sağlamak önemlidir. Güvenilir zirai
        ilaçlar, bu hedefe ulaşmanız için en önemli yardımcılarınızdan biridir.
        Her türlü tarımsal zararlıya ve hastalığa karşı etkili çözümler
        sunuyoruz. Güvenilir ve kaliteli ürünlerimizle bahçenizi korurken,
        ürünlerinizin verimini de artırabilirsiniz.
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

export default ProductsIlac;
