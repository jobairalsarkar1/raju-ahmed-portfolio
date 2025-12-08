import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Projects from "@/components/Porjects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </>
  );
}
