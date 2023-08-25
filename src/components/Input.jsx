import React from 'react'

const Input = ({title,placeholder,name,containerStyle,inputStyle,titleStyle}) => {
  return (
    <div className={containerStyle}>
    <p className={titleStyle}>{title}</p>
    <input type="text" name={name} className={inputStyle} placeholder={placeholder} id="" />
    </div>
  )
}

export default Input