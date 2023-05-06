import { checkout } from "./checkout";

export default function Cita({ stripePriceID, profile }) {
  //   console.log(stripePriceID);

  return (
    <div className="flex flex-col justify-center h-[475px]">
      <div className=" md:w-[500px] md:h-[500px] h-[450px]">
        {profile.nombre === "Amalia Santacruz" && (
          <iframe
            src="https://calendly.com/amalianutritiva"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        )}

        {profile.nombre === "Lesly Cárdenas" && (
          <iframe
            src="https://calendly.com/lesnutritiva"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        )}
      </div>
      <div className="w-[500px] flex justify-center">
        <button
          onClick={() =>
            checkout({
              lineItems: [
                {
                  price: `${stripePriceID}`,
                  quantity: 1,
                },
              ],
            })
          }
          type="submit"
          role="link"
          className="py-5 px-10 rounded-full text-white bg-[#f28482] font-bold"
        >
          Pagar Primero
        </button>
      </div>
    </div>
  );
}
