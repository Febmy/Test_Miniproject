import SectionHeading from "./SectionHeading";

export default function Collections({ items = [] }) {
  return (
    <section id="collections" className="container mx-auto px-4 py-12">
      <SectionHeading title="Our favorite Collections" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`collection-${i}`}
            className="w-full h-56 object-cover rounded-2xl"
          />
        ))}
      </div>
    </section>
  );
}
