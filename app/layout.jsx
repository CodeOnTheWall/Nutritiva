import "./globals.css";
import Header from "@/components/MainPage/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" bg-[#f7ede2]">
        <Header />
        {children}
      </body>
    </html>
  );
}
