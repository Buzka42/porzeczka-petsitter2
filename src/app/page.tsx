import { Hero } from "@/components/Hero";
import { Caretaker } from "@/components/Caretaker";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full bg-oatmeal-100 flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Caretaker />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
