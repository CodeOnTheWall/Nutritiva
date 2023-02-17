import urlFor from "@/lib/urlFor";

export default function CertificationCard({ profile }) {
  return (
    <div
      className="overflow-y-auto h-[475px] md:h-[555px]
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
