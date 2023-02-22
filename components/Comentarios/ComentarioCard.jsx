export default function ComentarioCard({ comentario }) {
  return (
    <div
      className="rounded-lg w-[300px] md:h-[350px] items-center
    snap-center bg-[#f4a261]/40 py-3 md:pt-5 px-3 md:px-3 overflow-hidden"
    >
      <div>{comentario.comentario}</div>
      <div className="pt-3 md:pt-4">
        <div>{comentario.nombre}</div>
        <div>{comentario.ubicacion}</div>
      </div>
    </div>
  );
}
