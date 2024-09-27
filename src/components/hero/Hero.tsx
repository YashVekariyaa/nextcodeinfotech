"use client"
import { main } from '@/interfaces/main';
import { useState } from 'react';
import ContactForm from '../contact/ContactForm';
import HeroContent from './HeroContent';

interface HeroProps {
    mainData: main
}

const Hero = ({ mainData }: HeroProps) => {
    const { name, titles, heroImage, shortDesc, techStackImages } = mainData
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 pt-20 md:pt-32 lg:pt-32 xl:pt-40">
                    <HeroContent />
                    <ContactForm />
                </div>
            </section>
        </>
    )
}
export default Hero