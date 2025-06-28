import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Meet the Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/about/anmol"
          className="block p-6 border rounded-xl hover:shadow-md transition"
        >
          <img
            src="/images/anmol.jpg"
            alt="Anmol"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">Anmol Tiwari</h2>
          <p>UI/UX Designer | Visual Thinker | Portfolio Specialist</p>
        </Link>
        <Link
          href="/about/aditya"
          className="block p-6 border rounded-xl hover:shadow-md transition"
        >
          <img
            src="/images/aditya.jpg"
            alt="Aditya"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">Aditya</h2>
          <p>Frontend & Full Stack Developer | Web Wizard | Tech Enthusiast</p>
        </Link>
      </div>
    </main>
  );
}
