function Features() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-10">
        Complete Music Learning Solutions
      </h3>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <FeatureCard
          title="Online Piano Classes"
          desc="Live interactive classes from certified piano teachers."
        />
        <FeatureCard
          title="Beginner Friendly"
          desc="No prior music knowledge required. Start from basics."
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export { Features }