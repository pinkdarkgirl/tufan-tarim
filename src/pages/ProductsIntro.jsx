// rrd import
import { Link } from "react-router-dom";

function ProductsIntro({ onClick }) {
  return (
    <div>
      <div className="products-container">
        <div className="product-item">
          <Link to="ilac">
            <h3>ZİRAİ İLAÇLAR</h3>
          </Link>
          <p>
            Tarımınıza güç katmak ve verimi artırmak için kaliteli zirai
            ilaçlarımızı inceleyin!
          </p>
          <button onClick={() => onClick("ilac")} className="primary-item-btn">
            DAHA FAZLA
          </button>
        </div>
        <div className="product-item right">
          <Link to="gubre">
            <h3>GÜBRE & TAKVİYE</h3>
          </Link>
          <p>
            Ürünlerinize güç katın, toprağınıza özel besin takviyeleri ve gübre
            seçeneklerine göz atın!
          </p>
          <button onClick={() => onClick("gubre")} className="primary-item-btn">
            DAHA FAZLA
          </button>
        </div>
        <div className="product-item">
          <Link to="sulama">
            <h3>SULAMA SİSTEMİ</h3>
          </Link>
          <p>
            Bitkilerinize doğru miktarda su sağlamak için uzun ömürlü ve etkili
            modern sulama sistemlerimizi keşfedin.
          </p>
          <button
            onClick={() => onClick("sulama")}
            className="primary-item-btn"
          >
            DAHA FAZLA
          </button>
        </div>
        <div className="product-item right">
          <Link to="tohum">
            <h3>TOHUM & FİDE</h3>
          </Link>
          <p>
            Sağlıklı ve verimli bir hasadın temelini atın. Uzmanlarımızın
            önerdiği seçenekleri inceleyin!
          </p>
          <button onClick={() => onClick("tohum")} className="primary-item-btn">
            DAHA FAZLA
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsIntro;
