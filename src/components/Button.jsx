import React from 'react'

const Button = ({btnText, className, onClick, icon1, icon2}) => {
  return (
    <button className={`py-4 px-9 text-lg text-white font-bold rounded-full cursor-pointer hover:border-2 hover:border-black ${className} `} onClick={onClick}>{icon1}{btnText}{icon2}</button>
  )
}

export default Button
