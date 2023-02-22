import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

export default function ContactoCard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:nut.cardenas@outlook.es?subject=${formData.tema}
      &body=Hola, mi nombre es ${formData.nombre}. ${formData.mensaje} (${formData.email})`;
  };

  return (
    <article
      className="relative md:bottom-[45px] rounded-lg w-[400px] h-[625px] md:h-[675px] md:w-[700px]
 snap-center bg-[#f4a261]/40 py-10 md:p-10 overflow-hidden"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        // onSubmit={handleSubmit(onSubmit)}
        className=" flex space-y-2 justify-center "
      >
        <div
          className=" w-[300px] md:w-[375px] flex flex-col
      overflow-y-auto
      md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2]"
        >
          <input
            {...register("nombre")}
            placeholder="Nombre"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
          <input
            {...register("número")}
            placeholder="Número telefónico"
            className="contactInput"
            type="text"
          />
          <input
            {...register("tema")}
            placeholder="Tema"
            className="contactInput"
          />
          <textarea
            {...register("mensaje")}
            placeholder="Mensaje"
            className="contactInput"
            type="text"
          />

          <button
            type="submit"
            className="bg-[#d0e7d5] py-5 px-10 rounded-md text-[#ef8eb2] font-bold"
          >
            Enviar Correo
          </button>
        </div>
      </form>

      <div className="md:h-[400px] flex flex-col md:space-y-5 mt-5 text-center text-[13px] md:text-[16px]">
        <div className="flex flex-col items-center  ">
          <PhoneIcon className="text-[#f28482] h-7 w-7 animate-pulse" />
          <p>+525579244645</p>
        </div>

        <div className="flex flex-col items-center  ">
          <EnvelopeIcon className="text-[#f28482] h-7 w-7 animate-pulse" />
          <p>nut.cardenas@outlook.es/elenasanmed@gmail.com</p>
        </div>

        <div
          className="flex flex-col items-center  cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.google.com/maps?q=Jacarandas+No.+18,+Bellavista,+62170+Cuernavaca,+Mor.",
              "_blank"
            )
          }
        >
          <MapPinIcon className="text-[#f28482] h-7 w-7 animate-pulse" />
          <div>
            <p>Bellavista 18, Bellavista, 62140 Cuernavaca, Mor.</p>
            {/* <p>haga clic aquí para abrir en Google Maps!</p> */}
            <button className="bg-[#d0e7d5] py-1 px-2 rounded-lg text-[#ef8eb2] font-bold">
              haga clic aquí para abrir en Google Maps!
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
