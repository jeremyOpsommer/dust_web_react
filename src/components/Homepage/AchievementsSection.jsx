function AchievementsSection({ title, achievements }) {
  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
