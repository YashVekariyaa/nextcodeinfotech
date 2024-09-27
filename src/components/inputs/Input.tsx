import { InputProps } from '@/interfaces/main'
import React from 'react'

const Input: React.FC<InputProps> = ({ label }) => {
    return (
        <input
            className="appearance-none border placeholder:text-base leading-7 font-normal text-base outline-none rounded w-full h-12 px-5 text-gray-600 focus:outline-none focus:bg-blue-50 focus:placeholder:text-gray-500 transition-all duration-200"
            type="text"
            placeholder={label}
        />
    )
}

export default Input