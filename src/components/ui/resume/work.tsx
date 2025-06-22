import type { Work } from '@/types/types'
export default function Work({ experiences }: { experiences?: Work[] }) {
    return (
        <div>
            <h1 className="font-bold text-3xl">Work Experience</h1>
            {experiences?.map((exp) => (
                <div className="p-2" key={exp.company}>
                    <WorkExperience index={exp.index} company={exp.company} position={exp.position} dates={exp.dates} responsibilities={exp.responsibilities} />
                </div>
            ))}
        </div>
    )
};

function WorkExperience({ company, position, dates, responsibilities }: Work) {
    return (
        <>
            <h1 className="font-bold text-2xl italic">{company}</h1>
            <p>
                <i>{position}</i><br />
                {dates}
            </p>
            <ul className="ml-4 list-disc list-inside">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </>
    )
};
