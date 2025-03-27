import React from 'react'


export default function index() {
  return (
    <section>
    <div className='border-2 border-red-500 flex justify-around'>
        
        <img src="/logo.png" alt="imagem da logo da empresa Virterios" />
      <div className='border-2 border-green-500 flex flex-col'>
        <h2>Quem somos</h2>
        <p>A Virterios nasceu do desejo genuíno de ajudar. Tudo começou com um grupo de profissionais apaixonados por tecnologia e inovação, que compartilhavam . O que era apenas uma troca de ideias entre colegas logo se transformou em uma iniciativa maior: criar um espaço onde qualquer pessoa pudesse encontrar respostas, aprender e colaborar.
        </p>
        <p>Seja bem-vindo à Virterios. Aqui, o conhecimento se transforma em solução.</p>
      </div>
    </div>
    <div>
        <article>
           <img src="/missao.png" alt="" />
           <h3>Missão</h3>
           <p>Aproximar pessoas e tecnologia por meio de experiências de compra apaixonantes mundo afora.</p>
        </article>
        <article>
           <img src="/visao.png" alt="" />
           <h3>Visão</h3>
           <p>Ser referência no mercado tecnológico brasileiro</p>
        </article>
        <article>
           <img src="/valores.png" alt="" />
           <h3>Valores</h3>
           <ul>
            <li>Agilidade</li>
            <li>Praticidade</li>
            <li>Precisão</li>
           </ul>
        </article>
    </div>
    </section>
  )
}
