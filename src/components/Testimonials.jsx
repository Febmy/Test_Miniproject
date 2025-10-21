import SectionHeading from "./SectionHeading";

export default function Testimonials({ items = [] }) {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-12">
      <SectionHeading title="What our costumer says" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <article key={i} className="rounded-xl border p-5">
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold leading-tight">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700">{t.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
