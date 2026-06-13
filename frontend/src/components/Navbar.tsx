import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <div className="flex items-center gap-4">
      <Image
        src="/logo.jpeg"
        alt="APP Home Plans"
        width={90}
        height={90}
        className="h-auto"
      />

      <div>
        <h1 className="text-4xl font-extrabold text-blue-950">
          APP Home Plans
        </h1>

        <p className="text-sm text-gray-500">
          Since 2003
        </p>
      </div>
    </div>

    <div className="flex gap-8">

  <a
    href="#home"
    className="hover:text-[#0F2A66] transition"
  >
    Home
  </a>

  <a
    href="#about"
    className="hover:text-[#0F2A66] transition"
  >
    About
  </a>

  <a
    href="#services"
    className="hover:text-[#0F2A66] transition"
  >
    Services
  </a>

  <a
    href="#projects"
    className="hover:text-[#0F2A66] transition"
  >
    Projects
  </a>

  <a
    href="#contact"
    className="hover:text-[#0F2A66] transition"
  >
    Contact
  </a>

</div>

      </div>

    </nav>
  );
}