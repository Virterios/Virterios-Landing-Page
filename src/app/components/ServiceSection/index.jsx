import ServiceCard from "../UI/ServiceCard";

export default function index() {
  return (
    <>
      {/* <div className="text-red-500">
        <h2>
          Se tem problema, tem solução
          <span>Onde tem solução, tem Virterios</span>
        </h2>
        <p>
          De cada esquina às maiores redes varejistas, nós estamos lá.Somos a
          resposta confiável que você precisa para prosperar.Seja qual for a
          necessidade: tem solução pra tudo, tem Linx pra tudo.
        </p>
      </div> */}

      <section className="flex flex-col lg:flex-row justify-center items-center lg:h-screen">
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
    </>
  );
}
