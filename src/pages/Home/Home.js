import { useEffect, useState } from "react";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
function Home() {
  //creating state for product data
  // whenever there is a change  in product , it will force component refresh
  const [products, setProducts] = useState([]);
  // const [click, setClick] = useState(0);
  // const [click1, setClick1] = useState(10);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      // calling json function
      .then((res) => res.json())
      //listening to json function to return
      .then((res) => {
        setProducts(res);
        console.log(products.length);

        res.forEach((obj) => {
          obj.rating.rate = Number(Math.trunc(obj.rating.rate));
        });
      });
  }, []);

  return (
    <div>
      <Header />
      {/* products */}
      <div>
        {/* {click} {click1}
        <button onClick={() => {setClick(click+1)}}>Click</button>
        <button onClick={() => {setClick1(click1+1)}}>Click1</button> */}
        {/* <h3>{products && products.length}</h3> */}

        {/* Products */}
        <div className="row">
          {products.map((product) => (
            <div className="col-3">
              <ProductCard item={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
