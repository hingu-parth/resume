import { useState } from 'react'
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  const [mode, setMode] = useState("light")

  const changeHandler = () => {
    if (mode==='light') {
      window.document.body.classList.add('dark')
      setMode('dark')
    }else{
      window.document.body.classList.remove('dark')
      setMode('light')
    }
  }
  return (
    <header className="flex-auto items-center mb-8 md:mb-11  ">
        <div className='flex justify-between items-center '>
        <h1 className=" text-4xl font-semibold text-gray-750 pb-px dark:text-white">
          Parth Hingu
        </h1>
        <button   className="print:invisible px-3 headerName rounded-lg border-2 border-spacing-1 border-gray-550 transition-all duration-100 ease-in-out" onClick={changeHandler} >
        {mode==='light' ? <BsFillSunFill className='text-gray-700'/> : <BsMoon className='text-whtie' />}
        </button>
        </div>
      </header>
  )
}

export default Header