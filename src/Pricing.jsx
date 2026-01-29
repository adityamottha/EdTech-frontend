function Pricing() {
  return (
    <section className="py-16 px-8 bg-white">
      <h3 className="text-3xl font-bold text-center mb-4">
        Simple & Affordable Pricing
      </h3>

      <p className="text-center text-gray-600 mb-10">
        Choose a plan that fits your learning journey 🎹
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <PriceCard
          title="Beginner"
          price="₹999 / month"
          features={[
            "Basic piano fundamentals",
            "2 live classes per week",
            "Recorded lessons access",
          ]}
        />

        <PriceCard
          title="Intermediate"
          price="₹1499 / month"
          features={[
            "Chord progressions",
            "3 live classes per week",
            "Practice assignments",
          ]}
          highlight
        />

        <PriceCard
          title="Advanced"
          price="₹1999 / month"
          features={[
            "Advanced techniques",
            "Personal mentoring",
            "Performance preparation",
          ]}
        />
      </div>
    </section>
  );
}

function PriceCard({ title, price, features, highlight }) {
  return (
    <div
      className={`rounded-xl border p-6 shadow-sm text-center ${
        highlight ? "border-[#1C3F60] scale-105" : ""
      }`}
    >
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-2xl font-bold text-[#1C3F60] mb-4">{price}</p>

      <ul className="text-gray-600 mb-6 space-y-2">
        {features.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>

      <button className="bg-[#1C3F60] text-white px-6 py-2 rounded-lg">
        Enroll Now
      </button>
    </div>
  );
}

export { Pricing };