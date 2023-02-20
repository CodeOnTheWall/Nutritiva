import { useState } from "react";
import { useForm } from "react-hook-form";
import { checkout } from "./checkout";

// import { google } from "googleapis";

// MUI
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import LoginTest from "@/components/loginTest/LoginTest";

export default function Cita({ stripePriceID }) {
  //   console.log(stripePriceID);
  const { register, handleSubmit } = useForm();

  const createEvent = async () => {
    // Load the Google Calendar API
    const calendar = google.calendar({
      version: "v3",
      auth: session.accessToken,
    });

    // Create a new event
    const event = {
      summary: "Test Event",
      location: "New York",
      description: "This is a test event",
      start: {
        dateTime: "2023-03-01T09:00:00-07:00",
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: "2023-03-01T17:00:00-07:00",
        timeZone: "America/Los_Angeles",
      },
      reminders: {
        useDefault: true,
      },
    };

    // Insert the new event
    await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
  };

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
          <LoginTest />
          <button
            onClick={createEvent}
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
