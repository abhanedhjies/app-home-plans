import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <div className="flex items-center gap-3">
  <img
    src="/logo.jpeg"
    alt="APP Home Plans"
    className="w-12 md:w-16"
  />

  <div>
    <h1 className="text-lg md:text-3xl font-bold text-blue-950">
      APP Home Plans
    </h1>

    <p className="text-xs md:text-base text-gray-500">
      Since 2003
    </p>
  </div>
</div>

   <div className="hidden md:flex gap-10">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>

      </div>

    </nav>
  );
}