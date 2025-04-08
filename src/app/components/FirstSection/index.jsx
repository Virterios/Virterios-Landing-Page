import React from 'react'

export default function index() {
    return (
        <section className="bg-[url('/Virterios-lp.png')] bg-cover bg-center h-screen w-full">
            <article className="h-full w-full px-6 md:px-12 lg:pl-24 flex flex-col justify-center bg-black/30"> 
                <div className="w-full max-w-3xl">
                    <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
                        Seu Site Profissional Pronto para{" "}
                        <span className="text-4xl sm:text-5xl lg:text-6xl text-[#F19F01]">Vender Mais!</span>
                    </h2>

                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">
                        Acreditamos que um site bem estruturado é essencial para o sucesso do
                        seu negócio. Oferecemos soluções personalizadas, responsivas e de alto
                        desempenho para destacar sua marca no mercado.
                    </p>

                    <button className="bg-[#F19F01] px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-white text-sm sm:text-base hover:scale-105 transition-transform">
                        Solicite seu site agora!
                    </button>
                </div>
            </article>
        </section>

    )
}
