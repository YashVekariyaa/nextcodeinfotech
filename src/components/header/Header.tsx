'use client';
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import { navItems } from '@/utils/utils';

export default function Header() {

    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)

    return (
        <header className={` ${scroll ? 'border-b bg-white' : 'border-b-0'} shadow-sm bg-white border-gray-200 dark:border-b-0 z-30 flex flex-col fixed w-full`}>
            <nav className='py-4 hidden sm:flex items-center justify-between max-w-screen-xl container mx-auto px-4'>
                <Link href={'/'} className='hover:text-violet-700 text-violet-500 transition-colors duration-300'>
                    <img src='./logo.png' className='h-16 object-fill' />
                </Link>
                <ul className='flex items-center gap-8'>
                    {navItems.map((item, index) => (
                        <li key={index} className='cursor-pointer leading-tight tracking-wide text-sm text-nav font-semibold hover:text-primary transition-all duration-300'>
                            {item?.label}
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className='p-4 flex sm:hidden items-center justify-between'>
                <img src='./logo.png' className='h-10 object-fill' />
                <CgMenuRight size={25} onClick={() => setNavCollapse(false)} className='cursor-pointer' />
            </nav>

            <div className={`flex min-h-screen w-screen absolute md:hidden top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>
                <div className="bg-white w-3/4">
                    <div className='flex justify-end p-3'>
                        <div className='bg-blue-50 rounded-full h-12 w-12 flex justify-center items-center cursor-pointer hover:bg-blue-100 transition-all duration-300'>
                            <CgClose size={20} className='flex justify-center items-center ' onClick={() => setNavCollapse(true)} />
                        </div>
                    </div>
                    {navItems.map((item, index) => (
                        <li key={index} className='flex px-5 flex-col gap-10 cursor-pointer line-clamp-none leading-10 tracking-wide text-sm text-nav font-bold hover:text-primary transition-all duration-300'>
                            {item?.label}
                        </li>
                    ))}
                </div>
            </div>
        </header>
    )
}