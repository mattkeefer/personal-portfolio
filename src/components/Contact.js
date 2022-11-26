import { MailIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <MailIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Get In Touch
          </h1>
          <a href="https://linkedin.com/in/mkeefer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 my-1 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto hover:text-red-500"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
          </a>
          <a href="mailto:keefer.m@northeastern.edu">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto hover:text-red-500">keefer.m@northeastern.edu</p>
          </a>
          
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">978-302-6932</p>
        </div>
      </div>
    </section>
  );
}
