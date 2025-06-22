import type { Certification } from "@/types/types";
export default function Certifications({ certifications }: { certifications: Certification[] }) {
    return (
        <>
            <h1 className="font-bold text-3xl">Certifications</h1>
            {certifications.map((cert) => (
                <div className="indent-4" key={cert.name}>
                    <Certification name={cert.name} issuer={cert.issuer} />
                </div>
            ))}
        </>
    )
}

function Certification({ name, issuer }: Certification) {
    return (
        <>
            <h1 className="font-bold text-lg italic">{name}</h1>
            <p>{issuer}</p>
        </>
    )
}