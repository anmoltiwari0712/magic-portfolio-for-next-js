export default function AdityaAbout() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Aditya</h1>
      <p className="text-gray-600 mb-6">Frontend & Full Stack Developer</p>
      <img
        src="/images/aditya.jpg"
        alt="Aditya"
        className="w-32 h-32 rounded-full mb-6"
      />
      <p>
        I'm a developer who transforms designs into responsive and dynamic web
        experiences. I specialize in frontend development using React, Next.js,
        and also have experience in backend systems.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>React.js, Next.js</li>
        <li>Node.js, Express, MongoDB</li>
        <li>REST APIs, Git, CI/CD</li>
        <li>TailwindCSS, SCSS</li>
      </ul>
    </main>
  );
}
