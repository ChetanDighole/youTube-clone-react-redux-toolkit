import React from 'react'
import Button from './Button'

// const list = [ "All" , "Gaming" , "Live" ]

const ButtonList = () => {
  return (
    <div className='flex'>

      <Button name="All" />
      <Button name="Gaming" />
      <Button name="song" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Soccor"/>

    </div>
  )
}

export default ButtonList