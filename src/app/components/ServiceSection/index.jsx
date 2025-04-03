import ServiceCard from "../UI/ServiceCard";

export default function index() {
  return (
    <div className="">
      <div className="mt-10 lg:mt-10 lg:h-80 flex justify-center items-center ">
        <div className="lg:w-6/12 text-center p-3 md:w-8/12">
          <h2 className="text-3xl  lg:text-5xl font-semibold flex flex-col text-[#FF7F00] mb-4">
            Se tem problema, tem solução
            <span>Onde tem solução, tem Virterios</span>
          </h2>
          <p className="text-[#A4A4A4] text-sm lg:text-lg">
            De cada esquina às maiores redes varejistas, nós estamos lá.Somos a
            resposta confiável que você precisa para prosperar.Seja qual for a
            necessidade: tem solução pra tudo, tem Linx pra tudo.
          </p>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row justify-center items-center flex-wrap mb-10">
        <ServiceCard
          title="E-commerce"
          image="/supermarket.jpg"
          link="/ecommerce"
        />
        <ServiceCard
          title="E-commerce"
          image="/supermarket.jpg"
          link="/ecommerce"
        />
        <ServiceCard
          title="E-commerce"
          image="/supermarket.jpg"
          link="/ecommerce"
        />
      </section>
    </div>
  );
}
