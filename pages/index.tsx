import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import MyExperience from "../components/Experince/MyExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="z-0 bg-[rgb(36,36,36)] scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-400/20 text-white h-screen snap-y snap-mandatory overflow-y-scroll">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <MyExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
