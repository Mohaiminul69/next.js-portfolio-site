import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experince/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills/Skills";

const Home: NextPage = () => {
  return (
    <div className="z-0 bg-[rgb(36,36,36)] scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-400/20 text-white h-screen snap-y snap-mandatory overflow-y-scroll">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-0 p-3 w-full bg-black snap-end">
          <div className="flex items-center justify-center">
            <h1 className="cursor-pointer">my-portfolio 2022</h1>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
