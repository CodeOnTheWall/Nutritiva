import urlFor from "@/lib/urlFor";

export default function ProductoCard({ producto }) {
  return (
    <div
      className="flex flex-col justify-center rounded-lg md:h-[300px] md:w-[200px] items-center
      snap-center bg-[#f4a261]/40 py-3 md:pt-5 px-3 md:px-3  overflow-hidden"
    >
      <img
        key={producto._id}
        className=" h-[125x] w-[200px] "
        src={urlFor(producto.imagen.asset).url()}
      />
      <div>{producto.nombre}</div>
      <button className=" bg-[#f28482] rounded-full px-2 hover:text-white">
        <a href={producto.link}>Comprar Aqui</a>
      </button>
    </div>
  );
}
