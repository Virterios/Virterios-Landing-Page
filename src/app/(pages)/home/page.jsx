import React from 'react'
import Header from '../../components/header/index.jsx'
export default function page() {
  return (
    <section className='bg-white w-full h-screen'>
      <Header/>
      <article>
        <h2 className='text-black font-bold text-3xl border-8 w-[60%]'>Seu Site Profissional Pronto para <span className='text-5xl'>Vender Mais!</span></h2>
        <p className='text-black text-l w-[60%]'>Acreditamos que um site bem estruturado é essencial para o sucesso do seu negócio. Oferecemos soluções personalizadas, responsivas e de alto desempenho para destacar sua marca no mercado. EleveProntos
        Original credibilidade e conquiste mais clientes com um site desenvolvido para resultados</p>
      </article>
    </section>
    
  )
}
