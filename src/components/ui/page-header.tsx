export default function PageHeader({ title }: Readonly<{ title: string }>) {
    return (
        <>
            <div className='bg-cyan-400 bg-opacity-70 w-3/6  text-center rounded-md shadow-md p-4 '>
                <h2 className="text-2xl font-bold drop-shadow-2xl 0 ">{title}</h2>
            </div>
        </>
    );
};