// css import
import "./about.css";

// image imports
import dukkan1 from "../assets/dukkan1.jpeg";
import dukkan2 from "../assets/dukkan2.jpeg";
import dukkan3 from "../assets/dukkan3.jpeg";

function About() {
  return (
    <div className="page-container">
      <div className="about">
        <div className="section-intro">
          <h1 className="section-title">HAKKIMIZDA</h1>
          <p className="section-intro-body">Toprağımız, Geleceğimizdir!</p>
        </div>
        <div className="about-container">
          <div className="about-text-container">
            <p>
              Tufan Tarım, köklü bir geçmişe sahip olup, 50 yılı aşkın süredir
              zirai ilaç sektöründe faaliyet göstermektedir. 1972 yılında Osman
              Tufan tarafından kurulan şirketimiz, başlangıcından bu yana
              çiftçilerimize kaliteli ve güvenilir tarım ürünleri sağlamak için
              kararlılıkla çalışmaktadır.
            </p>
            <p>
              Sektördeki uzun yıllara dayanan deneyimimiz, tarım alanında
              yaşanan gelişmeleri yakından takip edip çiftçilerimize en iyi
              çözümleri sunmamıza olanak tanımaktadır. Bu süreçte, müşteri
              memnuniyetini her zaman ön planda tutarak, doğru ürünleri doğru
              zamanda sağlamak için çaba harcadık. Geçmişten günümüze değerli
              müşterilerimizle kurduğumuz güçlü bağlar, bizim için gurur
              kaynağıdır.
            </p>
            <p>
              Tufan Tarım olarak, zirai ilaçtan gübreye, tohumdan fideye kadar
              geniş bir ürün yelpazesine sahibiz. Her bir ürünümüz, yerel
              çiftçilerimizin ihtiyaçlarına özel olarak seçilmiş ve sunulmuştur.
              Çiftçilerimizin başarısı, bizim başarımızdır.
            </p>
            <p>
              Tufan Tarım, sunduğu her üründe kaliteye ve güvene büyük önem
              verir. Geniş ürün çeşitliliğimizde kalite standartlarımızdan ödün
              vermiyor, çiftçilerimize en üst düzeyde performans ve güvenilirlik
              sunuyoruz.
            </p>
          </div>
          <div className="about-img-container">
            <img src={dukkan1} alt="dukkan" />
            <img src={dukkan2} alt="dukkan" />
            <img src={dukkan3} alt="dukkan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
