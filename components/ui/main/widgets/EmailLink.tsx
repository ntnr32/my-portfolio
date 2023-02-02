import React from 'react'
import * as CONSTANT from 'utils/constant'
import styles from './widget.module.css'

const EmailLink = () => {

    const afterStyle = 'after:h-20 after:bg-gray-400 after:w-[1px] after:mx-auto';

    return (
        <div className={`font-poppins hidden md:grid grid-flow-row px-14 gap-4 text-gray-400 bottom-0 right-0 fixed ${afterStyle}`}>
            <a className={`${styles.vertical}`} href={`mailto:${CONSTANT.EMAIL_ADDRESS}`}>{CONSTANT.EMAIL_ADDRESS}</a>
        </div>
    )
}

export default EmailLink