//@ts-nocheck
import { services } from "../constants/data";
//components
import ServiceCard from "../components/ServiceCard/index";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="w-2/3 my-3 text-base font-medium">
To give you an idea of who I am, I'd describe myself as someone who is open to learning in every aspect of life and enjoys it. I love to travel and discover new cultures.

 I have gained experience from working in a few companies. I am continually motivated to learn new tools and keep up with the latest technology so that I can deliver high-quality work. I have always strived to specialize in this field.
      </h6>
      <div
        className="flex-grow p-4 mt-5 text-left bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="mx-6 my-5 text-2xl font-semibold tracking-wide">
          My Portfolio
        </h4>

        <div className="grid gap-6 mt-10 lg:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard data={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
