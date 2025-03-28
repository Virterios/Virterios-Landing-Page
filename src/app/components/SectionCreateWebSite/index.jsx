export default function index() {
  return (
    <>
      <section className="bg-[#0077ED] flex flex-col lg:flex-row items-center justify-evenly pt-15 pb-15">
        <div className="w-6/12 lg:w-8/12 max-w-xl">
          <h2 className="text-center lg:text-start text-2xl lg:text-6xl text-white font-semibold">
            Crie seu site agora!
          </h2>
          <p className="mt-5 text-white font-extralight lg:text-base text-sm mb-8 text-justify lg:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
          <button
            className="w-2/2 bg-[#F19F01] mb-10 lg:mb-0 rounded-xs h-18 text-white font-semibold text-2xl shadow-lg
"
          >
            Solicitar Orçamento
          </button>
        </div>

        <img
          className="w-5/12"
          src="/computer.png"
          alt="imagem ilustrativa de um computador"
        />
      </section>
    </>
  );
}
