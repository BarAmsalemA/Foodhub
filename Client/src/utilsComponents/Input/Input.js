import React from 'react'

const Input = ({type, className, content}) => {
  return (
      <div className='input-container'>
        {content}
        <input type={type} className={`input-field ${className}`}/>
    </div>
  )
}

export default Input