import { ButtonProps } from '@/interfaces/main'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ className, text }) => {
    return (
        <button className={className}>{text}</button>
    )
}

export default Button