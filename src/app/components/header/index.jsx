import React from 'react'
import Link from 'next/link'
export default function index() {
  return (
    <header className='absolute top-5 w-full'>
        <nav className='flex justify-around items-center w-[80%] h-[50%] bg-gradient-to-r from-[#004487] to-[#0077ED] rounded-[6px] list-none font-bold text-white'>
            <img src="" alt="Logo virterios" />
            <li >Serviços</li>
            <li >Modelos</li>
            <Link href='/about-us'>Quem somos</Link>
            <button className='px-6 py-3 bg-[#F19F01] rounded-[6px] font-bold '>Fale com a equipe</button>
        </nav>
    </header>
  )
}
