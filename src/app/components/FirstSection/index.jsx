import React from 'react'

export default function index() {
    return (
        <section className="bg-[url('/Virterios-lp.png')] bg-cover bg-center h-screen w-full">
            <article className="pl-25  h-screen w-[60%] flex flex-col justify-center">
                <h2 className="text-white font-bold lg:text-4xl w-[60%] mb-10">
                    Seu Site Profissional Pronto para{" "}
                    <span className="lg:text-6xl text-4xl">Vender Mais!</span>
                </h2>
                <p className="text-white lg:text-2xl w-[60%] mb-10">
                    Acreditamos que um site bem estruturado é essencial para o sucesso do
                    seu negócio. Oferecemos soluções personalizadas, responsivas e de alto
                    desempenho para destacar sua marca no mercado. EleveProntos Original
                    credibilidade e conquiste mais clientes com um site desenvolvido para
                    resultados
                </p>
                <button className="bg-[#F19F01] w-65 h-15 rounded-[6px] font-bold text-white">
                    Solicite seu site agora!
                </button>
            </article>
        </section>

    )
}
