import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
function Home() {
  return (
    <div>
      <Header />
      {/* products */}
      <div>
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
