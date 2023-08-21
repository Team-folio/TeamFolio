import React from 'react'

function SocialButton({onClick, icon, alt}) {
    return (
        <button className='rounded-full p-2' onClick={e=>onClick()}>
            <img src={icon} alt={alt} className='w-9 h-9' />
        </button>
    );
}

export default SocialButton