import React, { useState } from 'react'
import Input from '../inputs/Input'
import NumberInput from '../inputs/NumberInput'
import 'react-phone-input-2/lib/style.css'
import TextArea from '../inputs/TextArea'
import Button from '../buttons/Button'

const ContactForm = () => {
    const [phone, setPhone] = useState<string>("")

    const handlePhoneChange = (value: string) => {
        setPhone(value)
    }

    // xl:w-[550px]
    return (
        <div className="md:w-[450px] lg:w-[550px] xl:w-[550px]">
            <form className="shadow-md rounded-2xl border-2 border-gray-100 px-8 pt-6 pb-8 mb-4">
                <p className='text-normalDark para pb-4 text-xl leading-[28px] font-bold'>Innovate your business today!</p>
                <div className="mb-6">
                    <Input label="Name" />
                </div>
                <div className="mb-6">
                    <Input label="Email" />
                </div>
                <div className="mb-6">
                    <NumberInput value={phone} onChange={handlePhoneChange} />
                </div>
                <div className="mb-6">
                    <Input label="Email" />
                </div>
                <div className="mb-6">
                    <TextArea />
                </div>
                <div className="mb-6">
                    <Button
                        className='bg-primary uppercase text-sm tracking-normal px-10 py-4 rounded font-bold text-white hover:bg-primary-hover transition-all duration-300'
                        text="Submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default ContactForm