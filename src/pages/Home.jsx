// rrd import
import { Link } from "react-router-dom";

// component import
import Hero from "../ui/Hero";
import ProductsHome from "../ui/ProductsHome";

// image imports
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import dukkan from "../assets/dukkan.jpeg";

// css import
import "./home.css";

function Home() {
  return (
    <div className="homepage">
      <Hero />
      <div className="home">
        <div className="home-container">
          <ProductsHome />
          <div className="intro-item">
            <div className="intro-text">
              <Link className="intro-text-title" to="urunler">
                ÜRÜNLERİMİZ
              </Link>
              <p>
                Tufan Tarım&apos;ın geniş ürün yelpazesi ile tarımınıza değer
                katın. Kaliteli tarım ilaçlarından, verimli tohumlara kadar
                uzanan çeşitli seçeneklerimizi keşfedin.
              </p>
              <Link className="more-link" to="urunler">
                Daha Fazla &gt;
              </Link>
            </div>
            <img src={home2} className="intro-img" />
          </div>
          <div className="intro-item">
            <div className="intro-text">
              <Link className="intro-text-title" to="hizmetler">
                HİZMETLER
              </Link>
              <p>
                Uzman danışmanlık, etkili tarım teknolojileri ve sürdürülebilir
                çözümlerle çiftçilerimize özel hizmetlerimizi sunuyoruz.
                Tarımınıza değer katmak için yanınızdayız.
              </p>
              <Link className="more-link" to="hizmetler">
                Daha Fazla &gt;
              </Link>
            </div>
            <img src={home1} className="intro-img" />
          </div>

          <div className="intro-item">
            <div className="intro-text">
              <Link className="intro-text-title" to="hakkimizda">
                BİZ KİMİZ?
              </Link>
              <p>
                Tufan Tarım olarak, sektördeki uzmanlığımız ve çiftçilere
                sağladığımız değerle tanınmaktayız. Hikayemizi öğrenmek ve
                bizimle tanışmak için bizi takip edin. Bizimle bir adım öne
                geçin.
              </p>
              <Link className="more-link" to="hakkimizda">
                Daha Fazla &gt;
              </Link>
            </div>
            <img src={dukkan} className="intro-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
