import React from 'react'

const Button = ({btnText, className, onClick, icon1, icon2}) => {
  return (
    <button className={`py-2 px-3 text-lg rounded-lg cursor-pointer border-2 border-secondary ${className} `} onClick={onClick}>{icon1}{btnText}{icon2}</button>
  )
}

export default Button
