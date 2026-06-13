export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-blue-950 mb-6">
              About APP Home Plans
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Established in 2003, APP Home Plans has been delivering
              trusted construction, planning and design services across
              Nilgiris and Wayanad for more than two decades.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              From architectural planning and approvals to complete
              residential and commercial construction, we provide
              end-to-end solutions tailored to every client's vision.
            </p>

            <p className="text-gray-700 leading-8">
              With a strong network of experienced professionals and
              skilled labour teams, we ensure quality workmanship,
              timely execution and customer satisfaction in every project.
            </p>
          </div>

          <div className="bg-blue-950 rounded-2xl text-white p-10">

            <h3 className="text-3xl font-bold mb-8">
              Why Choose Us?
            </h3>

            <ul className="space-y-4">

              <li>✓ 20+ Years of Experience</li>

              <li>✓ 200+ Completed Projects</li>

              <li>✓ Planning to Handover Solutions</li>

              <li>✓ Experienced Construction Teams</li>

              <li>✓ Residential & Commercial Expertise</li>

              <li>✓ Service Across Nilgiris & Wayanad</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}