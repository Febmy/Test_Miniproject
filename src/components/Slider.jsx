import useSlider from "../hooks/useSlider";

export default function Slider({ images = [], interval = 3000 }) {
  const { index, next, prev } = useSlider(images.length, interval);
  if (images.length === 0) return null;
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="w-full h-[380px] object-cover transition-transform duration-500"
      />
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
      >
        ›
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => (i > index ? next() : prev())}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-black" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
