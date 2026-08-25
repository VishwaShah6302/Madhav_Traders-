import Header from "./components/Header";
import Hero from "./components/Hero";
import Features, { WhyChooseUs } from "./components/Features";
import ProductCategories from "./components/ProductCategories";
import About from "./components/About";
import Gallery from "./components/Gallery";
import InquiryForm from "./components/InquiryForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf6] text-[#1c2a1e] antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductCategories />
        <About />
        <WhyChooseUs />
        <Gallery />
        <InquiryForm />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;