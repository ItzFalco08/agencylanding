import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Projects from "@/components/home/Projects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <Projects/> */}
    <Pricing/>
    <FAQ/>
    <Footer/>
    </>
  );
}
