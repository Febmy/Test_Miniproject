import SectionHeading from "./SectionHeading";
import FeatureIconCard from "./FeatureIconCard";

export default function Features({ items = [] }) {
  return (
    <section id="features" className="container mx-auto px-4 py-12">
      <SectionHeading title="Know about best feature in shoes." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <FeatureIconCard key={i} {...it} />
        ))}
      </div>
    </section>
  );
}
