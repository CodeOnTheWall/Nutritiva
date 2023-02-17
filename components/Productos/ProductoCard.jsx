import urlFor from "@/lib/urlFor";

export default function ProductoCard({ producto }) {
  return (
    <div
      className="flex flex-col justify-center rounded-lg w-[350px] md:h-[350px] md:w-[300px] items-center
      snap-center bg-[#f4a261]/40 py-3 md:pt-5 px-3 md:px-3 md:hover:opacity-100 md:opacity-40 md:transition-opacity md:duration-200 overflow-hidden"
    >
      <img
        key={producto._id}
        className=" h-[150x] w-[250px] "
        src={urlFor(producto.imagen.asset).url()}
      />
      <div>{producto.nombre}</div>
      <button>
        <a href={producto.link}>Comprar Aqui</a>
      </button>
    </div>
  );
}
