import React from 'react'
import { HiOutlinePaintBrush } from 'react-icons/hi2'
import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlineAndroid } from 'react-icons/ai'

const ServiceMenu = () => {
    return (
        <div className="absolute transition-all duration-300 transform -translate-y-2 scale-95 z-20">
            <div className="absolute left-0 w-64 mt-5 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                <div className="p-3">
                    <a href="javascript:void(0)" className="text-gray-700 flex gap-2 w-full px-4 py-3 leading-5 hover:text-primary transition-all duration-200" role="menuitem" ><HiOutlinePaintBrush className='text-xl' /><span className='text-sm'>UI/UX Design</span></a>
                    <a href="javascript:void(0)" className="text-gray-700 flex gap-2 w-full px-4 py-3 leading-5 hover:text-primary transition-all duration-200" role="menuitem" ><FaLaptopCode className='text-xl' /><span className='text-sm'>Web Development</span></a>
                    <a href="javascript:void(0)" className="text-gray-700 flex gap-2 w-full px-4 py-3 leading-5 hover:text-primary transition-all duration-200" role="menuitem" ><AiOutlineAndroid className='text-xl' /><span className='text-sm'>App Development</span></a>
                </div>
            </div>
        </div >
    )
}

export default ServiceMenu