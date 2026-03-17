function GuidesSection({ title, guides }) {
  return (
    <section id="guides" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p>{guide.description}</p>
              <a
                href={guide.link}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Lire le guide
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuidesSection;
