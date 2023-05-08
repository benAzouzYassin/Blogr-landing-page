import React from "react";

function FourthSection() {
  return (
    <section className="lg:pr-64 grid grid-cols-1  lg:grid-cols-2 mt-20  pb-10 ">
      <div className=" lg:bg-[url('images/illustration-laptop-desktop.svg')] bg-[url('images/illustration-laptop-mobile.svg')] bg-contain pt-96 bg-left bg-no-repeat lg:scale-125 lg:ml-[-7vw]"></div>
      <div className="pt-16  text-center lg:text-left scale-150 lg:scale-100 w-[60%] mr-auto ml-auto">
        <h3 className="text-2xl font-medium  text-[#233f54] mb-5 ">
          Free, Open, Simple
        </h3>
        <p className="text-gray-600 mt-8 font-normal text-sm">
          Blogr is a free and open source application backed by a large
          community of helpful developers. it supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h3 className="text-2xl font-medium  text-[#233f54] mb-5 mt-14">
          Powerful tooling
        </h3>
        <p className="text-gray-600 mt-8 font-normal text-sm">
          Batteries included. We built a simple and straiforward CLI tool that
          makes customization and deployment a breez, but capable of producing
          even the most complicated sites.
        </p>
      </div>
    </section>
  );
}

export default FourthSection;
