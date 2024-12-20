// 'use client';
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Skills from "@/components/technologies/Technologies";
import Projects from "@/components/portfolio/Portfolio";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Header from "../header/Header";
import Technologies from "@/components/technologies/Technologies";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";

const Home = ({ data }: any) => {
    return (
        <>
            <Hero />
            <Services />
            <Technologies />
            <div className="mt-2">
                <Portfolio />
            </div>
            {/* <Socials socials={data.socials} /> */}
            {/* <About aboutData={data.about} name={data.main.name} />
            <Projects projectsData={data.projects} />
            <Experiences experienceData={data.experiences} educationData={data.educations} />
            <Contact />
            <CallToAction />
            <Footer socials={data.socials} name={data.main.name} /> */}
        </>
    )
}

export default Home