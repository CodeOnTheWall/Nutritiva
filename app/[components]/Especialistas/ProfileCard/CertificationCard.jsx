import urlFor from "@/lib/urlFor";

export default function CertificationCard({ certificacion }) {
  return (
    <img
      key={certificacion._key}
      className=" h-[300px] w-[500px] "
      src={urlFor(certificacion.asset).url()}
    />
  );
}
