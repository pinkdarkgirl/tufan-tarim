// css import
import "./services.css";

// rrd import
import { useNavigate } from "react-router-dom";

const fideUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/fide.jpg";
const gübreUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/gübre.jpg";
const sulamaUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/sulama.jpg";
const ziraiUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/zirai.jpg";
const zeytinUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/zeytin.jpg";

function Services() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="page-container">
      <div className="services">
        <div className="section-intro">
          <h1 className="section-title">HİZMETLERİMİZ</h1>
          <p className="section-intro-body">
            Tufan Tarım olarak, tarıma dair her adımda yanınızdayız. Zirai
            ilaçtan gübreye, sulamadan fidelerinize kadar geniş bir yelpazede
            sunduğumuz hizmetlerle çiftçilerimize profesyonel bir destek
            sunuyoruz.
          </p>
        </div>
        <div className="services-container">
          <div className="services-item">
            <div className="services-item-text">
              <h3 className="services-item-title">ZİRAİ İLAÇLAR</h3>
              <p>
                Bitkilerinizi zararlı etkenlerden korumak ve sağlıklı bir
                şekilde büyümelerini sağlamak için etkili ve güvenilir zirai
                ilaçlar sunuyoruz. Tarlanızın ihtiyaçlarına uygun olarak
                seçilmiş ürünlerimizle, verimliliği artırmanıza yardımcı
                oluyoruz.
              </p>
              <button
                onClick={() => handleClick("/urunler/ilac")}
                className="primary-item-btn"
              >
                KEŞFET
              </button>
            </div>
            <div className="services-img-container">
              <img src={ziraiUrl} className="services-item-img" />
            </div>
          </div>
          <div className="services-item left">
            <div className="services-item-text">
              <h3 className="services-item-title">
                GÜBRE VE BESİN TAKVİYELERİ
              </h3>
              <p>
                Toprağınıza ve bitkilerinize ihtiyaç duyduğu besinleri dengeli
                bir şekilde sağlamak için özel gübre ve besin takviyeleri
                sunuyoruz. Kaliteli ve dengeli bir beslenme programı ile
                bitkilerinizin büyümesini destekliyor ve verimliliği
                artırıyoruz.
              </p>
              <button
                onClick={() => handleClick("/urunler/gubre")}
                className="primary-item-btn"
              >
                KEŞFET
              </button>
            </div>
            <div className="services-img-container">
              <img src={gübreUrl} className="services-item-img" />
            </div>
          </div>
          <div className="services-item">
            <div className="services-item-text">
              <h3 className="services-item-title">SULAMA SİSTEMLERİ</h3>
              <p>
                Bitkilerinizin su ihtiyacını karşılamak için en uygun sulama
                sistemlerini belirleyerek çeşitli seçenekler ile su tasarrufu
                sağlıyor ve suyun verimli kullanımını sağlıyoruz.
              </p>
              <button
                onClick={() => handleClick("/urunler/sulama")}
                className="primary-item-btn"
              >
                KEŞFET
              </button>
            </div>
            <div className="services-img-container">
              <img src={sulamaUrl} className="services-item-img" />
            </div>
          </div>
          <div className="services-item left">
            <div className="services-item-text">
              <h3 className="services-item-title">FİDE & TOHUMLAR</h3>
              <p>
                Sizin için en uygun tohum ve fideleri belirleyerek, başarılı bir
                başlangıç yapmanıza yardımcı oluyoruz. Kaliteli ve sağlıklı
                tohum ve fidelerle, ürünlerinizin güçlü bir temel üzerinde
                büyümesini sağlıyoruz.
              </p>
              <button
                onClick={() => handleClick("/urunler/tohum")}
                className="primary-item-btn"
              >
                KEŞFET
              </button>
            </div>{" "}
            <div className="services-img-container">
              <img src={fideUrl} className="services-item-img" />
            </div>
          </div>
          <div className="services-item">
            <div className="services-item-text">
              <h3 className="services-item-title">PROFESYONEL DANIŞMANLIK</h3>
              <p>
                Deneyimli tarım uzmanlarımızdan oluşan ekibimiz, sizinle
                birlikte çalışarak size özel çözümler sunuyor. Tarlalarınızın
                ihtiyaçlarını belirleyerek en iyi uygulamaları paylaşıyor ve
                başarıya giden yolda sizinle birlikte ilerliyoruz.
              </p>
              <button
                onClick={() => handleClick("/iletisim")}
                className="primary-item-btn"
              >
                KEŞFET
              </button>
            </div>
            <div className="services-img-container">
              <img src={zeytinUrl} className="services-item-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
