// import { FaHome } from "react-icons/fa";
import { NavItems } from "..";
import Hero from "../components/Hero";
import FloatingNav from "../components/FloatingNavbar";
import Grid from "../components/Grid";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className = "relative bg-white dark:bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav  navItems = {NavItems}/>
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
