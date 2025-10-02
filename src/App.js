import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Muktar Bello</Link>
            <nav className="space-x-4">
              <Link to="/" className="hover:text-indigo-600">Home</Link>
              <Link to="/about" className="hover:text-indigo-600">About</Link>
              <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
              <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-6 py-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* fallback if someone enters a wrong URL */}
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
