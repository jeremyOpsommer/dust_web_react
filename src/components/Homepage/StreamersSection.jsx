function StreamersSection({ title, streamers }) {
  return (
    <section id="streamers" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {streamers.map((streamer) => (
            <div
              key={streamer.name}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={streamer.image}
                alt={streamer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{streamer.name}</h3>
                <p>{streamer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StreamersSection;
