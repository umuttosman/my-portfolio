//components
import Bar from "../components/Bar/index";
//data
import { languages, tools } from "../constants/data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education && exp*/}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold uppercase">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Istanbul Aydın University
            </h5>
            <p className="font-semibold">MANAGEMENT INFORMATION SYSTEMS</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
            Moravian Business College
            </h5>
            <p className="font-semibold">Department of Economics and Management</p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold uppercase">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
               Front End Developer
            </h5>
            <p className="font-semibold">Inveon (July 2024 - present)</p>
            <p className="w-full sm:w-3/4 my-3 text-justify"> I conduct thorough UI/UX tests to evaluate the functionality, performance, and responsiveness of web applications.
This involves user interface testing, usability testing, and ensuring consistent user experiences.
Technologies that i am using: HTML, CSS, SCSS, Bootstrap, JavaScript, jQuery, Razor Template.
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
            Front End Developer
            </h5>
            <p className="font-semibold">
              Karaca (April 2023 - June 202)
            </p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
            I conduct thorough UI/UX tests to evaluate the functionality, performance, and responsiveness of web applications.
This involves user interface testing, usability testing, and ensuring consistent user experiences.
Technologies that i am using: HTML, CSS, SCSS, Bootstrap, JavaScript, jQuery, Twig Template.
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Jr. Full Stack Developer
            </h5>
            <p className="font-semibold">
              Edvido (September 2021 - August 2022)
            </p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
            I mostly take on Front-End Development tasks, but also take on Back-End Development tasks when needed. In my
projects, I usually use Vue.js and .Net Core.
With Vue.js, I create user interfaces on the front-end, and with .Net Core, I manage server-side operations on the
back-end. Along with these technologies, I also work with various database systems and RESTful APIs.
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Jr. Back End Developer
            </h5>
            <p className="font-semibold">
              Westerops (April 2021 - December 2021)
            </p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
            While working at Westerops, I have used Django in my projects. In addition to this technology, I have also worked with
            various tools such as database systems and RESTful APIs
            </p>
          </div>
        </div>
      </div>

      {/* languuages && tools */}
      <div className="grid gap-6 mt-8 md:grid-cols-2">
        <div>
        <h5 className="flex flex-col xl:flex-row my-2 text-xl font-bold text-red-500">
            <span>Languages && </span> <span className="xl:px-1 px-0">Frameworks</span>
          </h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="flex flex-col xl:flex-row my-2 text-xl font-bold text-red-500">
            <span>Tools && </span> <span className="xl:px-1 px-0">Softwares</span>
          </h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
