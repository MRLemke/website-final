import './App.css'
import Navbar from './Components/Navbar.jsx'
import Layout from './Components/Layout.jsx'
import Hero from './Components/Hero.jsx'
import Gallery from './Components/Gallery.jsx'
import HomePageBento from "./Components/HomePageBento.jsx";
import Footer from "./Components/Footer.jsx"
import About from "./Components/About.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx"
function Home() {
    return (
        <>

            <Hero />
            <Gallery />
            <HomePageBento />

        </>
    );
}
export default function App() {
    return (
        <Router>
            <Layout>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Layout>
        </Router>
    );
}
