import React from 'react'

const Button = ({btnText, className, onClick, icon1, icon2}) => {
  return (
    <button className={`py-3 px-4 text-sm text-white font-bold rounded-full cursor-pointer hover:border-2 border-secondary/60 ${className} `} onClick={onClick}>{icon1}{btnText}{icon2}</button>
  )
}

export default Button
