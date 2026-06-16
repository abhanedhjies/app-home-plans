export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-100"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#0F2A66] mb-6">
          Contact Us
        </h2>

        <p className="text-xl mb-4">
          📞 9443699242
        </p>

        <a
  href="mailto:jiesvarghese1980@gmail.com"
  className="block text-center text-lg md:text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline"
>
  📧 jiesvarghese1980@gmail.com
</a>

        <a
  href="https://www.google.com/maps/dir//APP+Home+Plans,+APV+complex,+Erumad,+Tamil+Nadu+643239/@11.5693142,76.2594977,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba60fe5572cf30d:0x430f4cefcdb7f85c!2m2!1d76.258953!2d11.5689818?entry=ttu"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  📍 APV Complex, Erumad, Tamil Nadu 643239
</a>

      </div>
    </section>
  );
}