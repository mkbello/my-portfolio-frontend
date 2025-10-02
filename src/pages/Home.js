
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="text-center">
      <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Hi, I'm Muktar Bello
      </motion.h1>
      <p className="max-w-2xl mx-auto text-lg mb-6">I build modern web apps. This is a minimal portfolio starter.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="font-semibold">Frontend</h3>
          <p className="text-sm mt-2">HTML, CSS, Tailwind CSS, Booststrap, JavaScript, jQuery, React</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="font-semibold">Backend</h3>
          <p className="text-sm mt-2">Node.js, Express, EJS, Nodemailer, Bcrypt, Session</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="font-semibold">Data Storage</h3>
          <p className="text-sm mt-2">PostgreSQL</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="font-semibold">Deploy</h3>
          <p className="text-sm mt-2">GitHub Pages / Render</p>
        </div>
      </div>
    </section>
  );
}
