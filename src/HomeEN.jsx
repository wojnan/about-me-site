import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

export default function HomeEN() {
  const navigate = useNavigate()
  
  const onButtonClick = () => {
    navigate("/pl")
  }

  return (
    <>
      <div>
        Welcome!
      </div>
      <div>This is the home page.</div>
        <input className='Button'
          type="button"
          value={"PL"}
          onClick={onButtonClick}
        />
    </>
  )
}
