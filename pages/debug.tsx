import { NavButton } from 'components'
import Button from 'components/controls/button/Button';
import React, { useState } from 'react'
import { VscComment } from 'react-icons/vsc'

const Debug = () => {
    const [buttonVariant, setButtonVariant] = useState<"regular" | "outline">("regular");

    return (
        <div>
            Debug Page
        </div>
    )
}

export default Debug