import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

import Header from "./grocerySite/components/Header/Header";
import HeroBanner from "./grocerySite/components/HeroBanner/HeroBanner";
import CategoryNav from "./grocerySite/components/CategoryNav/CategoryNav";
import ExploreCategories from "./grocerySite/components/ExploreCategory/ExploreCategory";
import FeaturedProducts from "./grocerySite/components/FeaturedProducts/FeaturedProduct";
import PromoBanners from "./grocerySite/components/PromoBanners/PromoBanners";
import DailyBestSells from "./grocerySite/components/DailySell/DailyBestSell";
import AppPromotion from "./grocerySite/components/AppPromotion/AppPromotion";
import Features from "./grocerySite/components/Features/Features";
import Footer from "./grocerySite/components/Footer/Footer";
import Layout from "./grocerySite/components/Layout/Layout";

function App() {
  return (
    <div className="flex overflow-hidden flex-col items-center pb-10 bg-white">
      {/* <main className="flex overflow-hidden flex-col px-20 bg-slate-800 max-md:px-5">
        <Header />
        <Hero />
        <Contact />
      </main> */}

      <Header />
      <CategoryNav />
      <HeroBanner />
      <ExploreCategories />
      <FeaturedProducts />
      <PromoBanners />
      {/* <DailyBestSells /> */}
      <AppPromotion />
      <Features />
      <Footer />
      {/* <Layout /> */}
    </div>
  );
}

export default App;
