// css import
import "./contact.css";

// //img import
// import mapdukkan from "../assets/mapdukkan.jpeg";

// library import
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const contactImgUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/mapdukkan.jpeg";

const emailIconUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/email.svg";
const locationIconUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/location.svg";
const phoneIconUrl =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/phone.svg";

function Contact() {
  return (
    <div className="page-container">
      <div className="contact">
        <div className="section-intro">
          <h1 className="section-title">BİZE ULAŞIN</h1>
          <p className="section-intro-body">
            İhtiyaçlarınızı karşılamak ve güçlü bir iletişim kurmak adına
            buradayız. Size en iyi hizmeti sunmak için hazırız.
          </p>
        </div>
        <div className="contact-container">
          <div className="map-container">
            <MapContainer
              id="map"
              center={[40.433351, 29.720357]}
              zoom={20}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[40.433351, 29.720357]}>
                <Popup>Buradayız!</Popup>
              </Marker>
            </MapContainer>
            <img src={contactImgUrl} alt="dukkan" />
          </div>
          <div className="contact-text">
            <div className="contact-item location">
              <img src={locationIconUrl} alt="location icon" />
              <h2>ADRES</h2>
              <p>
                Beyler Mahallesi Atatürk Caddesi No:118 İznik / Bursa{" "}
                <span>(merkez)</span>
              </p>
              <p>
                Beşevler Mahallesi Hisarcık Köyü No:12/1 Osmaneli / Bilecik{" "}
                <span>(şube)</span>
              </p>
            </div>
            <div className="contact-item">
              <img src={phoneIconUrl} alt="phone icon" />
              <h2>TELEFON</h2>
              <p>0533 491 9422</p>
              <p>0532 610 7343</p>
            </div>
            <div className="contact-item ">
              <img src={emailIconUrl} alt="email icon" />
              <h2>E-MAIL</h2>
              <p>tufantarim16@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
