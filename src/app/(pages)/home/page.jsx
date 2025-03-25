import React from 'react'
import Header from '../../components/header/index.jsx'
export default function page() {
  return (
    <section className="bg-[url('/Virterios-lp.png')] bg-cover bg-center h-screen w-full">
      <Header/>
      <article className='pl-25  h-[65%] w-[60%] flex flex-col justify-evenly'>
        <h2 className='text-white font-bold text-3xl w-[60%]'>Seu Site Profissional Pronto para <span className='text-5xl'>Vender Mais!</span></h2>
        <p className='text-white text-l w-[60%]'>Acreditamos que um site bem estruturado é essencial para o sucesso do seu negócio. Oferecemos soluções personalizadas, responsivas e de alto desempenho para destacar sua marca no mercado. EleveProntos
        Original credibilidade e conquiste mais clientes com um site desenvolvido para resultados</p>
        <button className='bg-[#F19F01] w-65 h-15 rounded-[6px] font-bold'>Solicite seu site agora!</button>
      </article>
    </section>
    
  )
}
