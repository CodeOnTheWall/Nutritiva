export default function Layout({ children, className }) {
  return (
    <main
      className={`flex flex-col justify-center items-center w-full p-8 md:p-24  ${className}`}
    >
      {children}
    </main>
  );
}
