"use client";
import { FloatingNav } from "../../components/Ui/floating-navbar";
import { navItems } from "../../data";
import Hero from "../../components/Hero";
import { WobbleCardDemo } from "../../components/About";
import Project from "../../components/Project";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <WobbleCardDemo />
        <Project />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
