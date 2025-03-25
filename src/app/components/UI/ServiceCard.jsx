export default function ServiceCard({ titulo, imagem }) {
  return (
    <>
      <div className="bg-white h-96 rounded-lg shadow-lg p-4 text-center w-96 m-6">
        <div
          className="relative w-full h-40 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${imagem})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 rounded-t-lg ">
            <span className="text-white">backgroun teste</span>
          </div>
        </div>

        <h3 className="text-lg font-bold mt-2">{titulo}</h3>
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Confira
        </button>
      </div>
    </>
  );
}
