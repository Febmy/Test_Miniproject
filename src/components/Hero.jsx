import { Link } from "react-router-dom";
import Slider from "./Slider.jsx";

export default function Hero({ banners }) {
  return (
    <section className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl/tight md:text-5xl font-extrabold">
          Comfort
          <br />
          awaits everyday
        </h1>
        <p className="mt-3 text-gray-600 max-w-md">
          Production and sale of the best shoe of various types for tour travel
          lovers. Feel the tightness and comfort of these items.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#top-selling"
            className="rounded-lg bg-black text-white px-5 py-3"
          >
            Open Catalog
          </a>
          <Link to="/catalog" className="rounded-lg border px-5 py-3">
            Full Catalog
          </Link>
        </div>
      </div>
      <Slider images={banners} />
    </section>
  );
}
