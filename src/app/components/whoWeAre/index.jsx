import React from 'react'
import Card from '../UI/WhoWeAreCard'

export default function index() {
  return (
    <section>
    <div className='flex justify-around items-center'>    
        <img src="/logo.png" alt="imagem da logo da empresa Virterios" />
      <div className='justify-evenly flex flex-col items-center h-125 w-220'>
        <h2 className='text-[#00376B] text-[54px] font-medium'>Quem somos</h2>
        <p className=' w-193 text-[20px]'>A Virterios nasceu do desejo genuíno de ajudar. Tudo começou com um grupo de profissionais apaixonados por tecnologia e inovação, que compartilhavam . O que era apenas uma troca de ideias entre colegas logo se transformou em uma iniciativa maior: criar um espaço onde qualquer pessoa pudesse encontrar respostas, aprender e colaborar.
        </p>
        <p className=' w-193 text-[20px] font-bold'>Seja bem-vindo à Virterios. Aqui, o conhecimento se transforma em solução.</p>
      </div>
    </div>
    <div className='h-120 flex justify-evenly items-center'>
      <Card
      image="/missao.png"
      descriptionImg="icone de missão"
      title="Missão"
      description="Aproximar pessoas e tecnologia por meio de experiências de compra apaixonantes mundo afora."
      />

      <Card
      image="/visao.png"
      descriptionImg="icone de um olho"
      title="Visão"
      description="Ser referência no mercado tecnológico brasileiro"
      />
        
        <article className='bg-white h-96 rounded-lg pt-6 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.3)]  p-4 text-center w-96 m-6 flex flex-col items-center justify-evenly'>
           <img src="/valores.png" alt="icone de mãos com o coração" />
           <h3 className='text-[#00376B] text-[30px] font-medium'>Valores</h3>
           <ul className='text-[18px] w-25 text-sm/6 list-disc flex flex-col items-start'>
            <li>Agilidade</li>
            <li>Praticidade</li>
            <li>Precisão</li>
           </ul>
        </article>
    </div>
    </section>
  )
}
