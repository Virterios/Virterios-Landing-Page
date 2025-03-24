import React from 'react'

export default function index() {
  return (
    <header className='flex items-center w-full h-20 bg-blue-600 '>
        <nav className='flex justify-around items-center w-[80%] bg-red-800'>
            <li >Serviços</li>
            <li >Modelos</li>
            <li >Quem somos</li>
            <button className='px-6 py-3 bg-[#F19F01] rounded-[6px'>Fale com a equipe</button>
        </nav>
    </header>
  )
}
