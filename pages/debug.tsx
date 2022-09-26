import Button from 'components/controls/button/Button'
import React, { useState } from 'react'
import { VscComment } from 'react-icons/vsc'

const Debug = () => {
    const [buttonVariant, setButtonVariant] = useState<"regular" | "outline">("regular");

    return (
        <div>
            <label htmlFor="variant">
                <input type="checkbox" name="variant" id="" onClick={() => setButtonVariant(buttonVariant === "regular" ? "outline" : "regular")} />
                Variant - {buttonVariant}
            </label>
            <Button text='MENU' leadIcon={<VscComment />} variant={buttonVariant} />
        </div>
    )
}

export default Debug