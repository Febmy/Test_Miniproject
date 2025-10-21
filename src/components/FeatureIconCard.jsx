export default function FeatureIconCard({ image, title, desc }) {
  return (
    <div className="rounded-xl border p-6">
      {image && (
        <img src={image} alt="" className="w-12 h-12 object-contain mb-4" />
      )}
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
