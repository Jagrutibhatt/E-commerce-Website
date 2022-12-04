import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="card">
      <img
        src="https://img1.gadgetsnow.com/gd/images/products/additional/large/G390760_View_1/mobiles/smartphones/apple-iphone-14-128-gb-purple-4-gb-ram-.jpg"
        className=" img-sizing"
        alt="Iphone 14"
      ></img>
      <hr />
      <div className="card-body">
        <h5 className="card-title">iPhone 14</h5>
        <p className="card-text"> &#x20b9; 95000</p>
        <p className="card-text">Build by Apple Company</p>
        <a href="#" className="btn btn-primary center">
          <i class="bi bi-cart-plus"> Cart </i>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
