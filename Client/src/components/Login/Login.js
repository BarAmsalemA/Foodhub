import React from 'react'
import './login.css'
import Input from '../../utilsComponents/Input/Input'
import Button from '../../utilsComponents/Button/Button'

const Login = () => {
    const handleClick = ()=>{
        alert('hi');
    }    
  return (
    <div className='login'>
        <Input content="Name ?" type='text'/>
        <Input content="Password ?" type='text'/>

        <Button content='LOGIN' onClick={handleClick}/>
    </div>
  )
}

export default Login