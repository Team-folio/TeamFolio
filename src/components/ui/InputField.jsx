import React from 'react'

function InputField({type, placeholder, onChange, name}) {
    return (
        <div className='mb-4'>
            <input
                onChange={e=>onChange(e)}
                className='py-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm border-purple-500 focus:outline-none focus:shadow-outline'
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputField