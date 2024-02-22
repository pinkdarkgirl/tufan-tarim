// rrd import
import { useLocation, useNavigate } from "react-router-dom";

// css import
import "./products.css";

//component imports
import ProductsIntro from "./ProductsIntro";
import ProductsIlac from "./ProductsIlac";
import ProductsGubre from "./ProductsGubre";
import ProductsSulama from "./ProductsSulama";
import ProductsTohum from "./ProductsTohum";

function Products() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (productComponent) => {
    navigate(`/urunler/${productComponent}`);
  };

  return (
    <div className="page-container">
      <div className="products">
        <div className="section-intro">
          <h1 className="section-title">ÜRÜNLERİMİZ</h1>
          <p className="section-intro-body">
            Çiftçilerimize en kaliteli ürünleri sunmak amacıyla işbirliği içinde
            olduğumuz firmalar, tarım sektöründeki güvenilir ve yenilikçi
            markalardan oluşmaktadır. Bu işbirlikleri ile, modern tarımın
            gereksinimlerini karşılamak ve verimli çözümler sunmak için sürekli
            olarak çalışmaktayız.
          </p>
        </div>
        {pathname === "/urunler" && <ProductsIntro onClick={handleClick} />}
        {pathname === "/urunler/ilac" && <ProductsIlac />}
        {pathname === "/urunler/gubre" && <ProductsGubre />}
        {pathname === "/urunler/sulama" && <ProductsSulama />}
        {pathname === "/urunler/tohum" && <ProductsTohum />}
      </div>
    </div>
  );
}

export default Products;
