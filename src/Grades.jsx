function Grades() {
  return (
    <section className="py-16 px-8">
      <h3 className="text-3xl font-bold text-center mb-10">
        Piano Learning Levels
      </h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <GradeCard level="Grade 1 to grade 3" coruseType="Beginner" />
        <GradeCard level="Grade 3 to grade 5" coruseType="Intermediate" />
        <GradeCard level="Grade 5 to grade 8" coruseType="Advanced" />
      </div>
    </section>
  );
}

function GradeCard({ level, coruseType }) {
  return (
    <div className="border rounded-xl p-6 text-center shadow-sm">
      <h4 className="text-xl font-semibold mb-2">{level}</h4>
      <p className="text-indigo-600 font-bold mb-4">{coruseType}</p>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        See More
      </button>
    </div>
  );
}

export { Grades }