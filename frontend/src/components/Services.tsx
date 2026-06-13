export default function Services() {
  const services = [
  "Architectural House Plans",
  "Building Approvals",
  "3D Elevation Design",
  "Villa Construction",
  "Modern House Construction",
  "Traditional House Construction",
  "Commercial Building Construction",
  "Interior Design",
  "Renovation & Remodeling",
  "Turnkey Construction Solutions",
];

  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}