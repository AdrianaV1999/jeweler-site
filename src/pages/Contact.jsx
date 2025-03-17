import React from "react";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";
import contact from "../pics/contact.jpg";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-400">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[600px]" src={contact} alt=""></img>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-xl text-gray-600 font-semibold">Our Store</p>
          <p className="text-gray-500">
            Adress: 123 Jewelry Street, New York, NY
          </p>

          <p className="text-gray-500">Phone: +1-000-000-0000</p>
          <p className="text-gray-500">Email: support@jeweler.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers</p>
          <p className="text-gray-500">Learn more about job openings</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
