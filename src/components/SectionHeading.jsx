export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <header className={`${align === "center" ? "text-center" : ""} mb-6`}>
      {eyebrow && (
        <p className="text-sm tracking-wide text-gray-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </header>
  );
}
