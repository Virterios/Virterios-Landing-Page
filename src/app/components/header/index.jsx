import React from 'react'
import Link from 'next/link'
export default function index() {
  return (
    <header className="flex fixed top-6 w-full z-50 justify-center items-center px-4">
      {/* Container principal (centralizado) */}
      <nav className="flex justify-between items-center w-full max-w-6xl h-16 md:h-20 bg-gradient-to-r from-[#004487] to-[#0077ED] rounded-lg px-4 md:px-8 text-white font-bold">
        
        {/* Logo (aparece em todas as telas) */}
        <img 
          src="/logo-virterios.png" 
          alt="Logo Virterios" 
          className="h-10 md:h-12" 
        />

         {/* Menu para desktop (hidden em mobile) */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <Link href="/" className="hover:underline">Serviços</Link>
          <Link href="/" className="hover:underline">Modelos</Link>
          <Link href="/" className="hover:underline">Quem somos</Link>
        </div>

        {/* Botão CTA (diminui em mobile) */}
        <Link 
          href="/contato" 
          className="px-4 py-2 md:px-6 md:py-3 bg-[#F19F01] rounded-lg text-sm md:text-base whitespace-nowrap"
        >
          Fale com a equipe
        </Link>

        {/* Botão de menu mobile (só aparece em telas pequenas) */}
        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
