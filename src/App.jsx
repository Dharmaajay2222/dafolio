import Hero from "./components/Hero.jsx"; // Adjust path if necessary
import Navbar from "./components/Navbar.jsx"; // Import Navbar component
import Projects from "./components/Projects.jsx"; // Import Projects component
import Bio from "./components/Bio.jsx";
import Skills from "./components/Skills.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-800 to-gray-900 bg-cover bg-center"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <EducationSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;
