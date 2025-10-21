import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import TopSelling from "../components/TopSelling.jsx";
import AboutStrip from "../components/AboutStrip.jsx";
import Collections from "../components/Collections.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { useEffect, useState } from "react";
import { getFeaturedProducts } from "../services/productsService.js";
import cms from "../data/cms.json";

const BANNERS = [
  "/assets/images/banner-1.jpg",
  "/assets/images/banner-2.jpg",
  "/assets/images/banner-3.jpg",
];

export default function Landing() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    getFeaturedProducts().then(setFeatured);
  }, []);
  return (
    <>
      <Hero banners={BANNERS} />
      <Features items={cms.features} />
      <TopSelling products={featured} />
      <AboutStrip title={cms.about.title} paragraphs={cms.about.paragraphs} />
      <Collections items={cms.collections} />
      <Testimonials items={cms.testimonials} />
      <Newsletter />
    </>
  );
}
