import React from 'react'

function Button({ text, onclick }) {
    return (
        <button onClick={onclick} className='bg-blue text-white rounded-md px-2 pb-1'>{text}</button>
    )
}

export default Button
