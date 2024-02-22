// css import
import "./contact.css";

// icon import
import email from "../assets/icons/email.svg";
import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";

// library import
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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
          <MapContainer
            id="map"
            center={[40.433351, 29.720357]}
            zoom={20}
            scrollWheelZoom={true}
            style={{ height: "300px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.433351, 29.720357]}>
              <Popup>Buradayız!</Popup>
            </Marker>
          </MapContainer>
          <div className="contact-text">
            <div className="contact-item location">
              <img src={location} alt="location icon" />
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
              <img src={phone} alt="phone icon" />
              <h2>TELEFON</h2>
              <p>0533 491 9422</p>
              <p>0532 610 7343</p>
            </div>
            <div className="contact-item ">
              <img src={email} alt="email icon" />
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
