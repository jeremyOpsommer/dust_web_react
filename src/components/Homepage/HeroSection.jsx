function HeroSection({ title, subtitle, ctaLink, ctaText, backgroundImage }) {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 px-4 py-8 md:px-8 md:py-16 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg mb-8">{subtitle}</p>
        <a
          href={ctaLink}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
