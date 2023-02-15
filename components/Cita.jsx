import { useState } from "react";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";

// MUI
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Cita() {
  //   console.log(servicio);
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

      <div className="overflow-y-auto h-[400px] mt-3">
        <form className=" flex flex-col space-y-2 w-fit mx-auto">
          <div className=" w-[300px] flex flex-col">
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
              placeholder="Número"
              className="contactInput"
              type="text"
            />
            <input
              {...register("medicamentos")}
              placeholder="Medicamentos"
              className="contactInput"
              type="text"
            />
            <input
              {...register("objectivo")}
              placeholder="Objetivo"
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
            <input
              {...register("estatura")}
              placeholder="Estatura promedio"
              className="contactInput"
              type="text"
            />
          </div>

          <button
            type="submit"
            role="link"
            className="bg-[#f28482] py-5 px-10 rounded-md text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
