import "./globals.css";
import Header from "./[components]/Header/Header";

export const metadata = {
  title: "Nutritiva",
  description: "Nutriologia y nutricion ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" bg-[#f7ede2] overflow-y-auto scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]">
        <Header />
        {children}
      </body>
    </html>
  );
}
