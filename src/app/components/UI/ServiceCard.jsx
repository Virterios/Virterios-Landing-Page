export default function ServiceCard({ title, image }) {
  return (
    <>
      <div className="h-110 rounded-lg shadow-lg m-3 text-center w-96  flex flex-col justify-between">
        <div
          className="relative w-full h-45 bg-cover bg-center rounded-t-lg flex justify-center border-b-8 border-amber-300"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="relative top-30 bg-white rounded-full  w-25 h-25 flex justify-center items-center text-3xl shadow-lg">
            🏣
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-5/12">
          <h3 className="text-lg font-bold ">{title}</h3>
          <button className="mt-3 bg-[#F19F01] text-white w-7/12 py-2 rounded-md hover:bg-[#f19d01cb] transition ">
            Confira
          </button>
        </div>
      </div>
    </>
  );
}
