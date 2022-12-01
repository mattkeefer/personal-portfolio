import React from "react";
import { ChartBarIcon } from "@heroicons/react/solid";
import { resume } from "../data";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        <ChartBarIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-10 cursor-default">
          Resume
        </h1>
        <div className="flex flex-wrap m-4 mb-10">
          {resume.map((experience) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <img
                    alt="experience"
                    src={experience.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white cursor-default">
                      {experience.name}
                    </span>
                    <span className="text-red-500 text-sm uppercase cursor-default">
                      {experience.company}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed mb-6 pt-4 cursor-default">{experience.description}</p>
                <p className="leading-relaxed mb-2 pt-2 text-white cursor-default">{experience.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
