import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Product from "./Product/Product";
import ProductCard from "./ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
 <Nav/>
<Banner/>
<Product/>

<ContactUs/>
<Footer/>
    </div>
  );
}

export default App;
