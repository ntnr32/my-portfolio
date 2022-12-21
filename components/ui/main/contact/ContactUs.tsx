import { Input } from 'components/controls'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='grid h-full w-full'>
            <div className='heading'>
                <h2>Get in touch</h2>
            </div>
            <div className='form'>
                <form action="">
                    <Input id='' label='Name' type='text' />
                    <Input id='' label='Name' type='text' />
                </form>
            </div>
            <div className='form-footer'></div>
        </div>
    )
}

export default ContactUs