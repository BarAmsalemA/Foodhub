import React from 'react'
import Button from '../../utilsComponents/Button/Button';
import Input from '../../utilsComponents/Input/Input';
import './window.css'

const Window = () => {
  return (
    <div className='window'>
    <Button content='Hi'/>
   <Input type='text' content='enter name'/>
    </div>
  )
}

export default Window;