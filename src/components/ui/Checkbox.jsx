import React from 'react'

function Checkbox({onChange, name}) {
    return (
        <div>
            <label className='inline-flex items-center cursor-pointer my-5'>
                <input
                    name={name}
                    onChange={e=>onChange(e)}
                    type='checkbox'
                    className='form-checkbox h-5 w-5 text-purple-500 border-purple-500 rounded focus:ring focus:ring-purple-200 accent-purple-500'
                />
                <span className='font-light text-slate-500 text-sm ml-2'>
                    By clicking this checkbox, you agree with these{' '}
                    <a href='#' className='text-purple-500'>
                        Terms and Services
                    </a>
                    .
                </span>
            </label>
        </div>)
}

export default Checkbox