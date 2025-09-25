import React, { useState } from 'react'

const ConditionRendering = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            {toggle ?
                <div>This is true</div> :
                <div>This is false</div>
            }
        </>
    )
}

export default ConditionRendering