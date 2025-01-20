import { ButtonProps } from '@/interfaces/main'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ className, text, type }) => {
    return (
        <button className={className} type={type}>{text}</button>
    )
}

export default Button