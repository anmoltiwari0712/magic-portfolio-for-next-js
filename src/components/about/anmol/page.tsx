export default function AnmolAbout() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Anmol Tiwari</h1>
      <p className="text-gray-600 mb-6">UI/UX Designer | Creative Mind</p>
      <img
        src="/images/anmol.jpg"
        alt="Anmol"
        className="w-32 h-32 rounded-full mb-6"
      />
      <p>
        I'm a UI/UX designer passionate about creating clean and human-centered
        digital experiences. I work with Figma, Framer, and design systems to
        craft meaningful and visually appealing interfaces.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Tools & Skills</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Figma, Framer, Adobe XD</li>
        <li>User Research & Wireframing</li>
        <li>Design Systems</li>
        <li>Prototyping & Interaction Design</li>
      </ul>
    </main>
  );
}
