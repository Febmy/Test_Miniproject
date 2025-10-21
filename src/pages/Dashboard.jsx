export default function Dashboard() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Dashboard (Protected)</h1>
      <p className="text-gray-600 mt-2">
        Hanya bisa diakses setelah login sukses (token tersimpan).
      </p>
    </section>
  );
}
