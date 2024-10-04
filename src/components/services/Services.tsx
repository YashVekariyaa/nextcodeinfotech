import React from 'react'
import ServiceCard from '../cards/ServiceCard'
import { services } from '@/utils/utils'

const Services = () => {
    return (
        <div className=''>
            <div className='mt-20'>
                <div className='pt-10 bg-[#fcfaff] text-center text-heading'>
                    <div className=''>
                        <div className='text-xl md:text-8xl xl:text-5xl font-bold font-heading leading-none'>
                            <span className='bg-blue-100 px-2'>Services</span>{" "}We Provide
                        </div>
                        <p className='text-sm pt-5'>Discover our wide variety of services, offering innovative solutions customized to meet your unique requirements and objectives.</p>
                        <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
                            <div className="grid grid-cols-3 w-full gap-5">
                                {
                                    services?.map((item) => {
                                        return <ServiceCard key={item?.image} {...item} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services