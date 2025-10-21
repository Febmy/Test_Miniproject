export default function Newsletter() {
  return (
    <section id="newsletter" className="container mx-auto px-4 py-12">
      <div className="rounded-2xl bg-gray-50 border p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Let us send you offering</h3>
          <p className="text-gray-600 text-sm">
            Get updates about new drops and exclusive promos.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full md:w-auto gap-2"
        >
          <input
            className="flex-1 md:w-80 border rounded-lg px-3 py-2"
            placeholder="Enter your email"
          />
          <button className="rounded-lg bg-black text-white px-4 py-2">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
