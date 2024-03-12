// rrd import
import { Link } from "react-router-dom";

// component import
import Hero from "../ui/Hero";
import ProductsHome from "../ui/ProductsHome";

// css import
import "./home.css";

const home1Url =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/home1.jpg";
const home2Url =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/home2.jpg";
const dukkanUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/dukkan.jpeg";

function Home() {
  return (
    <div className="homepage">
      <Hero />
      <div className="home-body">
        <div className="home">
          <ProductsHome />
          <div className="home-container">
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
              <img src={home2Url} className="intro-img" />
            </div>
            <div className="intro-item">
              <div className="intro-text">
                <Link className="intro-text-title" to="hizmetler">
                  HİZMETLER
                </Link>
                <p>
                  Uzman danışmanlık, etkili tarım teknolojileri ve
                  sürdürülebilir çözümlerle çiftçilerimize özel hizmetlerimizi
                  sunuyoruz. Tarımınıza değer katmak için yanınızdayız.
                </p>
                <Link className="more-link" to="hizmetler">
                  Daha Fazla &gt;
                </Link>
              </div>
              <img src={home1Url} className="intro-img" />
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
              <img src={dukkanUrl} className="intro-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
