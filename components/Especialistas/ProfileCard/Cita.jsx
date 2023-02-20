import { useState } from "react";
import { useForm } from "react-hook-form";
import { checkout } from "./checkout";

// MUI
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Cita({ stripePriceID }) {
  //   console.log(stripePriceID);
  const { register, handleSubmit } = useForm();

  const [value, setValue] = useState(new Date());

  return (
    <div className="flex flex-col justify-center h-[475px] md:h-[555px]">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Fecha y Hora"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>

      <div
        className="overflow-y-auto h-[400px] mt-3
      md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2]"
      >
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2"
        >
          <div className=" w-[300px] md:w-[375px] flex flex-col">
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
              {...register("medicamentos")}
              placeholder="¿Que medicamentos o suplementos consumes?"
              className="contactInput"
              type="text"
            />
            <input
              {...register("objectivo")}
              placeholder="Objetivo principal"
              className="contactInput"
              type="text"
            />
            <input
              {...register("peso")}
              placeholder="Peso aproximado"
              className="contactInput"
              type="text"
            />
            <input
              {...register("edad")}
              placeholder="Edad"
              className="contactInput"
              type="text"
            />
            <input
              {...register("estatura")}
              placeholder="Estatura promedio"
              className="contactInput"
              type="text"
            />
            <input
              {...register("bajar")}
              placeholder="¿Por qué quieres bajar de peso?"
              className="contactInput"
              type="text"
            />
          </div>
          <button
          // onClick={() =>
          //   checkout({
          //     lineItems: [
          //       {
          //         price: `${stripePriceID}`,
          //         quantity: 1,
          //       },
          //     ],
          //   })
          // }
          // type="submit"
          // role="link"
          // className="py-5 px-10 rounded-full text-white bg-[#f28482] font-bold"
          >
            Pagar Ahora
          </button>
        </form>
      </div>
    </div>
  );
}
