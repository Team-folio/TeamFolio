import React from 'react'

function Divider({children}) {
    return (
        <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-400">{children}</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
    )
}

export default Divider