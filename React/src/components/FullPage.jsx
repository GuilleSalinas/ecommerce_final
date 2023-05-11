import Footer from "./Footer";
import Home from "./Home";

import Navbar from "./Navbar";
import Ofertas from "./Ofertas";
import Products from "./Products";
import SliderPromotion from "./SliderPromotion";
import Grid from "./grid/Grid";

const FullPage = () => {
  return (
    <>
      <Navbar />
      <SliderPromotion />
      <Home />
      <Grid />
      <Products />
      <Ofertas />
      <Footer />
    </>
  );
};

export default FullPage;
