import SectionHeading from "./SectionHeading";
import ProductGrid from "./ProductGrid";

export default function TopSelling({ products = [] }) {
  return (
    <section id="top-selling" className="container mx-auto px-4 py-12">
      <SectionHeading title="A top-selling product" />
      <ProductGrid products={products} />
    </section>
  );
}
