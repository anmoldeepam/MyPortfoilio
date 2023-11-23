import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <div className="container px-10 py-4 mx-auto mt-24">
        <HeroSection />
        <AboutMe />
        <ProjectSection/>
        
      </div>
      <Footer />
    </main>
  );
}
