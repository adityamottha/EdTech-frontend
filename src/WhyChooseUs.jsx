function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <h3 className="text-3xl font-bold text-center mb-10">
        Your Learning, Our Priority
      </h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <WhyCard text="Certified Piano Teachers" />
        <WhyCard text="Structured Learning Path" />
        <WhyCard text="Student Progress Tracking" />
      </div>
    </section>
  );
}

function WhyCard({ text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <p className="font-semibold">{text}</p>
    </div>
  );
}

export { WhyChooseUs }