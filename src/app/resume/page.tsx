// import ContentContainer from "@/components/ui/content-container";
import PageHeader from "@/components/ui/page-header";
export default function Resume() {
  return (
    <>
      <PageHeader title="Resume" />
      <div className='bg-cyan-300 shadow-xl p-4 rounded-md w-full md:w-5/6'>
        <div className="flex flex-col gap-2 bg-[url('/paper.jpeg')] bg-cover p-4 rounded-md">
          <div className="ml-auto">
            <div>
              <p><i>1-403-975-5053</i></p>
              <p><i>pmacdonald15@gmail.com</i></p>
              <p><i>github.com/Pmacdon15</i></p>
              <p><i>Calgary, Alberta</i></p>
            </div>
          </div>
          <h1 className="text-4xl">Patrick MacDonald</h1>
          <h1 className="text-3xl">Summary</h1>
          <p className="text-lg indent-4">
            Motivated and dedicated individual seeking employment in the
            tech industry to gain hands-on experience while completing a Software
            Development Diploma.
          </p>
          <h1 className="text-3xl">Skills</h1>
          <ul className="ml-4 list-disc list-inside">
            <li>Team collaboration and leadership</li>
            <li>Programming Languages: Java, C#, Python, TypeScript, JavaScript, HTML, CSS, SQL, C++</li>
            <li>Tools/Technologies:
              VS Code, VS Studio, Android Studio,
              React, NextJS, Node.js, jQuery, Express,
              Vercel, TypeScript, Tailwind CSS
            </li>
            <li>Excellent communication, customer service, time management, organization, and decision-making</li>
            <li>Experience operating tractor-trailers and buses</li>
            <li>Adaptable in fast-paced environments</li>
          </ul>
          <h1 className="text-3xl">Education</h1>
          <h1 className="text-2xl"><b>Calgary Learning Institute</b></h1>
          <p className="text-lg"><i>GED</i></p>
          <ul className="ml-4 list-disc list-inside">
            <li>
              Completed the GED program at the Calgary Learning Institute November
              2022.
            </li>
          </ul>

          <h1 className="text-2xl"><b>BowValley College</b></h1>
          <p className="text-lg"><i>Software Development<br />GPA:3.94</i></p>
          <ul className="ml-4 list-disc list-inside">
            <li>
              Currently enrolled in the Software Development Diploma program at
              Bow Valley College.
            </li>
            <li>Expected graduation date is May 2025.</li>
          </ul>
          <h1 className="text-3xl">Work Experience</h1>
          <h1 className="text-2xl"><b>Sparks Eggs</b></h1>
          <p>
            <i>Egg Delivery Driver</i><br />
            November 2017 - January 2023
          </p>
          <ul className="ml-4 list-disc list-inside">
            <li>
              Driving tractor trailers for egg deliveries and pickups for Calgary
              and area and as far south as the United States border.
            </li>
            <li>
              Reviewing the next day&apos;s trips and mapping any unfamiliar areas.
            </li>
            <li>
              Responsibilities included; ensuring the vehicle is ready to
              transport cargo, providing customer service such as adhering to
              schedules, continuously keeping a log book up-to-date, operating
              power jacks and manual jacks, loading and unloading of eggs in a
              variety of different shipping packaging and containers.
            </li>
            <li>Able to follow MOT regulations.</li>
            <li>Driving and operating various types of vehicles and equipment.</li>
            <li>Maintaining a clean and organized work environment.</li>
            <li>Communicating effectively with team members and customers.</li>
          </ul>

          <h1 className="text-2xl"><b>City Wide Towing</b></h1>
          <p>
            <i>Tow Truck Operator</i><br />
            June 2015 - April 2016
          </p>
          <ul className="ml-4 list-disc list-inside">
            <li>
              Drove and operated tow trucks; this involved loading and securing
              vehicles and trailers of varying conditions for City the of Calgary,
              Calgary Police Service, Calgary Fire and Recuse, AMA, as well as the
              general public.
            </li>
            <li>
              Responsible for removal of vehicles for many reasons including but
              not limited to inoperable, stolen, illegally parked, or vehicles
              involved in motor vehicle accidents.
            </li>
            <li>
              Provided roadside assistance including but not limited to tire
              changes, battery boots, tire fill and lock-out services.
            </li>
            <li>
              Assisted in timely and professional delegation of emergency crews to
              ensure safety and efficiency while loading and cleaning accident
              sites.
            </li>
            <li>
              Provided customer service to the general public, as well as
              emergency services.
            </li>
          </ul>
        </div>
      </div>
    </>

  );
};