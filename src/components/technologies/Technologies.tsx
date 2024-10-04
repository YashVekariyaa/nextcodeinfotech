"use client"
import { useState } from 'react';
import { skill } from '@/interfaces/main';
import SkillCard from "./TechnologyCard"
import SectionWrapper from '../SectionWrapper';
import { technologies } from '@/utils/utils';

const Technologies = () => {
    const categories = Array.from(new Set(technologies.map((s: { category: any; }) => s.category)))
    const [category, setCategory] = useState(categories[0])

    return (
        <SectionWrapper id='skills' className="min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0">
            <div>
                <p className='pt-20 mb-10 text-center text-xl md:text-8xl xl:text-5xl font-bold font-heading tracking-px-n leading-none text-black'>
                    <span className='bg-blue-100 px-2'>Technologies</span>{" "}We Are Working With
                </p>
            </div>
            <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white text-black p-2 flex justify-between items-center gap-3">
                {categories.map((c: string, i: number) => (
                    <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer ${category.toLowerCase() === c.toLowerCase() ? "border-b-2 border-primary" : "hover:bg-gray-100"} transition-all duration-200 capitalize`}>{c}</span>
                ))}
            </div>

            <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
                {technologies.filter((s: skill) => s.category.toLowerCase() === category.toLowerCase()).map((s: any, i: number) => (
                    <SkillCard key={i} {...s} />
                ))}
            </div>

        </SectionWrapper>
    )
}

export default Technologies