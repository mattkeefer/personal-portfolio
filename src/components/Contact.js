import { MailIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <MailIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 cursor-default">
            Get in Touch
          </h1>
          <a href="mailto:keefer.m@northeastern.edu">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto hover:text-red-500">keefer.m@northeastern.edu</p>
          </a>
          
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">978-302-6932</p>
        </div>
      </div>
    </section>
  );
}
