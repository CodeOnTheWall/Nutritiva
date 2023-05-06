import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full  border-t-2 border-solid border-dark font-medium text-lg
     sm:text-base"
    >
      <div className=" p-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <Link
          href="https://www.kriscodes.ca/"
          target="_blank"
          className=" animate-bounce"
        >
          Sitio Web Construido Por
          <span className=" font-bold "> KrisCodes</span>
        </Link>
      </div>
    </footer>
  );
}
