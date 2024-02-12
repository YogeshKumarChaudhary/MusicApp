import React from "react";
import NotificationSection from "../components/NotificationSection/NotificationSection";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero Section/Hero";
import Brand from "../components/brand/Brand";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
import BannerGridSection from "../components/CollectionSetion/BannerGridSection";
import BestSeller from "../components/Best Seller/BestSeller";
import BannerSection from "../components/bannerSection/BannerSection";
import ValuesSection from "../components/ValuesSection/ValuesSection";
import InstagramSection from "../components/InstagramSection/InstagramSection";
import NewsletterSection from "../components/Newsletter/NewsletterSection";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      {/* Nitification Section */}
      <NotificationSection />

      {/* Navigation Section */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Brand Section */}
      <Brand />

      {/* ProductCarousel Section */}
      <ProductCarousel />

      {/* BannerGridSection Section */}
      <BannerGridSection />

      {/* BestSeller Section */}
      <BestSeller />

      {/* BannerSection Section */}
      <BannerSection />

      {/* ValuesSection Section */}
      <ValuesSection />

      {/* InstagramSection Section */}
      <InstagramSection />

      {/* NewsletterSection Section */}
      <NewsletterSection />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default HomePage;
