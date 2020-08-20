import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="Samsung 190.5 cm (75 Inches) Series 8 4K UHD LED Smart TV UA75NU8000K (Black)"
          price={5428}
          rating={5}
          image="https://m.media-amazon.com/images/I/91IttqgqY9L._AC_UY218_.jpg"
        />
        <Product
          id="12321342"
          title="Apple iPhone 11 (128GB) - Black"
          price={1640}
          rating={3}
          image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>

      {/* Product Line 2 */}
      <div className="home__row">
        <Product
          id="12321343"
          title="Think and Grow Rich
          by Napoleon Hill  | January 2014"
          price={8.7}
          rating={2}
          image="https://m.media-amazon.com/images/I/713rQq1bF6L._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product
          id="12321344"
          title="Levis's Casual White T-shirt"
          price={22.6}
          rating={4}
          image="https://choosmeinstyle.com/wp-content/uploads/2019/03/levis-shirts-7.jpg"
        />
        <Product
          id="12321345"
          title="settee Danube Home Jozel 3 Seater Fabric Sofa - Blue"
          price={1357}
          rating={3}
          image="https://m.media-amazon.com/images/I/71iayzLV0SL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      {/* Prosuct line 3 */}
      <div className="home__row">
        <Product
          id="12321346"
          title="Dettol Liquid Disinfectant Cleaner for Home, Lime Fresh, 500ml"
          price={2.6}
          rating={4}
          image="https://m.media-amazon.com/images/I/61iMPrT-DJL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
