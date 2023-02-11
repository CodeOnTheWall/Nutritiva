import urlFor from "@/lib/urlFor";

export default function CertificationCard({ profile }) {
  return (
    <div
      className=" p-10 md:py-10 md:px-0 h-[500px] md:h-[560px] overflow-y-auto
    md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2]
"
    >
      {profile.certificaciones.map((certificacion) => (
        <img
          key={certificacion._id}
          className=" h-[300px] w-[500px] "
          src={urlFor(certificacion.asset).url()}
        />
      ))}
    </div>
  );
}
