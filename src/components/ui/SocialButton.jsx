import React from 'react'

function SocialButton({onClick, icon}) {
    return (
        <button className='rounded-full p-2' onClick={e=>onClick()}>
            <span className=' text-purple-500 text-3xl hover:text-purple-400' >
                {icon}
            </span>
        </button>
    );
}

export default SocialButton