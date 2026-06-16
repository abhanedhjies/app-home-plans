export default function Hero() {
  return (
    <section
      id="home"
      className="
        bg-gradient-to-r
        from-[#0B1F4D]
        to-[#17357A]
        py-16
        md:min-h-screen
        flex
        items-center
        ">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-[#D4A017] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Established Since 2003
            </span>

           <h1
  className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-extrabold
  leading-tight
  text-white
  "
  style={{
    textShadow: "0 4px 15px rgba(0,0,0,0.4)",
  }}
>
              Building Dreams
              <br />
              With Precision
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-100 mt-8 leading-relaxed max-w-2xl">
              APP Home Plans delivers complete construction
              solutions across Nilgiris and Wayanad —
              from planning and approvals to luxury villas,
              modern homes, commercial buildings,
              interiors and renovations.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="bg-white text-[#0F2A66] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="https://wa.me/919443699242"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Villa"
              className="
                rounded-3xl
                shadow-2xl
                object-cover
                w-full
                h-[280px]
                sm:h-[400px]
                md:h-[500px]
              "
            />

            {/* Years Experience */}
            <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">

              <h3 className="text-4xl font-bold text-[#0F2A66]">
                20+
              </h3>

              <p className="text-slate-600">
                Years Experience
              </p>

            </div>

            {/* Projects Completed */}
            <div className="hidden md:block absolute -top-8 -right-8 bg-[#D4A017] text-white p-6 rounded-2xl shadow-xl">

              <h3 className="text-4xl font-bold">
                200+
              </h3>

              <p>
                Projects Completed
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}