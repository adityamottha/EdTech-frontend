function Hero() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: "url('public/hero2Image.webp')" }}
    >
      {/* Overlay */}
      <div className="w-full h-full bg-black/40 flex items-center">
        <div className="max-w-5xl mx-auto text-center px-8">
          <h2 className="typing text-4xl md:text-5xl font-bold mb-4">
            Learn Piano the Right Way...
          </h2>
          <p className="text-lg mb-6">
            Welcome to AddicToPiano – where students learn music step by step
            with expert guidance.
          </p>
          <button className="bg-[#1C3F60] text-white px-6 py-3 rounded-lg font-semibold">
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
}

export { Hero };