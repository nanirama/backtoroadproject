import React, { useEffect } from 'react'
import { useStateValue } from '../../../StateProvider'

const StepFour = () => {

    useEffect(() => {
        dispatch({
            type: 'ADD_STEP_THREE',
            item: ''
        });
        
    }, [])
    const [{ year, make, model, part }, dispatch] = useStateValue()

    return (
        <div style={{ background: 'yellow', width: '100%', height: '100%', transition: '0.5s'}}>
            <h2>Thank you for the enquiry. We will get back to you soon</h2>
        </div>
    )
}

export default StepFour
