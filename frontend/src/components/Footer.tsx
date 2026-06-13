export default function Footer() {
  return (
    <footer className="bg-[#0F2A66] text-white py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p>
          © {new Date().getFullYear()} APP Home Plans.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}