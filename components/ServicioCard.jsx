import { useState } from "react";

export default function ServicioCard({ servicio, reserva }) {
  const [normal, setNormal] = useState(true);
  const [showDescripcion, setShowDescripcion] = useState(false);

  const normalChangeHandler = (id) => {
    setShowDescripcion(false);
    setNormal(true);
  };
  const showDescripcionChangeHandler = (id) => {
    setShowDescripcion(true);
    setNormal(false);
  };

  return (
    <>
      {normal && (
        <div
          key={servicio._id}
          className="bg-[#f7ede2] rounded-md w-[300px] h-[75px] "
        >
          <div>{servicio.unServicio}</div>
          <div>1 Hr {servicio.costo}</div>
          <div className=" space-x-4">
            <button
              onClick={() => reserva(servicio._id)}
              className="text-[#f77f00] hover:headerButton"
            >
              Reserva ahora
            </button>
            <button
              onClick={() => showDescripcionChangeHandler(servicio._id)}
              className="text-[#f77f00] hover:headerButton"
            >
              Descripcion
            </button>
          </div>
        </div>
      )}

      {showDescripcion && (
        <div
          key={servicio._id}
          className={`bg-[#f7ede2] rounded-md w-[300px] h-${
            normal ? "75px" : "200px"
          }`}
        >
          <div className=" px-4 text-left"> {servicio.description}</div>
          <div className=" space-x-4">
            <button
              onClick={() => reserva(servicio._id)}
              className="text-[#f77f00] hover:headerButton"
            >
              Reserva ahora
            </button>
            <button
              onClick={() => normalChangeHandler(servicio._id)}
              className="text-[#f77f00] hover:headerButton"
            >
              Regresa
            </button>
          </div>
        </div>
      )}
    </>
  );
}
