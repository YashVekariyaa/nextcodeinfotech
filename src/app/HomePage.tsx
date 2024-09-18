// 'use client';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/technologies/Technologies";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Header from "./Header";
import Footer from "./Footer";
import Technologies from "@/components/technologies/Technologies";
import Services from "@/components/services/Services";

const HomePage = ({ data }: any) => {
    return (
        <>
            <Header logo={data.main.name} />
            <Hero mainData={data.main} />
            <Services />
            <Technologies />
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

export default HomePage