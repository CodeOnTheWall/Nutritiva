"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  const [text, count] = useTypewriter({
    words: [
      `Tu Salud es lo más importante `,
      "Conoce a tus Especialistas hoy",
      "Nosotras estamos listas para ayudar",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <>
      <span>{text}</span>
      <Cursor cursorColor="#f28482" />
    </>
  );
}
