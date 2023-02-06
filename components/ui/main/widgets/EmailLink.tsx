import Link from 'next/link';
import React from 'react'
import * as CONSTANT from 'utils/constant'
import styles from './widget.module.css'

const EmailLink = () => {

    const afterStyle = 'after:h-20 after:bg-gray-400 after:w-[1px] after:mx-auto';

    return (
        <div className={`font-MajorMonoDisplay hidden md:grid grid-flow-row px-14 gap-4 text-gray-400 bottom-0 right-0 fixed ${afterStyle}`}>
            <Link href={`mailto:${CONSTANT.EMAIL_ADDRESS}`}>
                <a className={`${styles.vertical}`}>
                    {CONSTANT.EMAIL_ADDRESS}
                </a>
            </Link>
        </div>
    )
}

export default EmailLink