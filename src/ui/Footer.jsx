// img import
import blackLogo from "../assets/logoblack.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-items">
          <div className="footer-item">
            <h3>Adres</h3>
            <p>Beyler Mahallesi Atatürk Caddesi No:118 İznik/Bursa</p>
          </div>
          <div className="footer-item">
            <h3>İletişim Bilgileri</h3>
            <p>0533 491 9422 | 0532 610 7343</p>
          </div>
          <div className="footer-item">
            <h3>Çalışma Saatlerimiz</h3>
            <p>Pazartesi - Cumartesi: 08:00 - 18:00 </p>
          </div>
        </div>
        <img src={blackLogo} className="footer-logo" />
      </div>
      <p className="copyright">
        © 2024 Tufan Zirai İlaç ve Tohumculuk San ve Tic Ltd. Şti. Tüm Hakları
        Saklıdır.
      </p>
    </footer>
  );
}

export default Footer;
