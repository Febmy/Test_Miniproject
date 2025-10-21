export default function AboutStrip({ title, paragraphs = [] }) {
  return (
    <section id="about" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="mt-4 space-y-4 max-w-3xl text-gray-700">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
