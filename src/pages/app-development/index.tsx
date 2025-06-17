import React from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { appDevelopmentProcess, appDevelopmentServices, designProcess, services, uiUxServices, webDevelopmentProcess, webDevelopmentServices } from '@/utils/utils'
import ServiceCard from '@/components/cards/ServiceCard'
import ProcessCard from '@/components/cards/ProcessCard'
import ContactForm from '@/components/contact/ContactForm'
import Button from '@/components/buttons/Button'

const index = () => {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="my-10 md:my-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="my-20 md:mb-24 text-center max-w-6xl mx-auto">
                            <h1 className="mb-16 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-[50px] xl:leading-[70px] text-heading text-center">
                                <span>Crafting Personalized Websites for Impactful User Experiences </span>
                                <span className="bg-blue-100 px-2">Web Development</span>
                            </h1>
                            <p className="font-semibold text-lg text-nav tracking-tight">Whether you’re building a website from scratch or improving an existing one, NextCode has the web development expertise and creativity to bring your vision to life.
                            </p>
                            <a href="#contact">
                                <Button className='bg-primary cursor-pointer text-sm tracking-normal px-10 py-3 mt-16 rounded font-bold text-white hover:bg-primary-hover transition-all duration-300' text='Get a Quote' />
                            </a>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <div className="my-10 md:my-24 bg-white">
                <div className='mt-20 pb-8'>
                    <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                        <span className='bg-blue-100 px-2'>Web Development</span> Services{" "}
                    </div>
                    <p className='text-sm pt-5 px-3 xl:px-0 text-center text-heading'>Our web development services cover everything from building a site from scratch to adding new features and improving performance.</p>
                    <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                            {
                                appDevelopmentServices?.map((item) => {
                                    return <ServiceCard key={item?.image} {...item} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='mt-20 pb-8'>
                    <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                        The <span className='bg-blue-100 px-2'>Process</span> we follow{" "}
                    </div>
                    <p className='text-sm pt-5 px-3 xl:px-0 text-center text-heading'>We follow a solution-focused development process from planning to launch, ensuring scalable, functional, and reliable websites tailored to your goals.</p>
                    <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                            {appDevelopmentProcess?.map((item) => {
                                return (
                                    <ProcessCard item={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='mt-20 pb-8' id='contact'>
                    <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                        Have a <span className='bg-blue-100 px-2'>Project</span> in Mind?{" "}
                    </div>
                    <p className='text-lg pt-5 px-3 xl:px-0 font-bold text-center text-heading'>Let's Connect</p>
                    <div className='flex justify-center mt-10 relative'>
                        <div className='relative'>
                            <img src="/icons/cont3d.png" className='h-20 xl:h-28 absolute -left-0 lg:-left-20 -top-10 lg:top-[-5px] animate-float' />
                            <ContactForm />
                            <img src="/icons/cont2.png" className='h-20 xl:h-28 absolute -right-0 lg:-right-36 bottom-0 lg:bottom-[-5px] animate-float' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index