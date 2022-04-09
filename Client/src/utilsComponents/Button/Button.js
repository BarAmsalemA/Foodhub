import React from 'react'
import './button.css'

const Button = ({content, onClick, className}) => (
    <button type='button' onClick={onClick} className={`btn ${className}`}>{content}</button>
)

export default Button

