import "./ProductCard.css";

function ProductCard(value) {
  // const ratingStar = Number(Math.trunc(value.item.rating.rate));
  const stars = [];
  for (let i = 0; i < Number(Math.trunc(value.item.rating.rate)); i++) {
    stars[i] = 1;
  }

  console.log(stars);
  return (
    <div className="card uniform">
      <h5 className="card-title">{value.item.title}</h5>
      <img src={value.item.image} className=" img-sizing" alt="Iphone 14"></img>
      <hr />
      <div className="card-body card-center">
        <p className="card-text"> {value.item.category}</p>
        <p className="card-text"> &#x20b9; {value.item.price}</p>
        <p>
          {stars.map((x) => (
            <i class="bi bi-star-fill"></i>
          ))}{" "}
          <span>({value.item.rating.count})</span>
        </p>
        <p className="card-text text height">{value.item.description}</p>
        <a href="/" className="btn btn-primary center">
          <i class="bi bi-cart-plus"> Cart </i>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
