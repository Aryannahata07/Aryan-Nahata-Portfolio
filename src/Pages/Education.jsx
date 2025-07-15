// components/Education.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    degree: "Secondary",
    institute: "Metas Adventist School",
    board: "ICSE",
    branch: "Class 10",
    marks: "93.4%",
    year: "2021",
  },
  {
    degree: "Higher Secondary",
    institute: "Sanskartirth Gyanpeeth School",
    board: "CBSE",
    branch: "Class 12",
    marks: "88.2%",
    year: "2023",
  },
  {
    degree: "B.Tech",
    institute: "Birla Institute of Technology, Mesra",
    board: "Bachelor of Technology",
    branch: "Artificial Intelligence and Machine Learning",
    marks: "8.9 CGPA",
    year: "2027",
  },
];

const Education = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="px-[5%] lg:px-[10%] pb-[10%] text-white" id="Education">
      {/* Centered Heading */}
      <div className="flex justify-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Education
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative flex flex-col gap-y-10">
        {/* Center vertical line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"></div>

        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className={`relative z-10 md:w-1/2 ${
              idx % 2 === 0 ? "self-start md:pl-0 md:pr-12" : "self-end md:pl-12 md:pr-0"
            }`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-purple-400 font-medium mb-3">{edu.institute}</p>
                <p className="text-sm text-gray-300">Degree: {edu.board}</p>
                <p className="text-sm text-gray-300">Board/Branch: {edu.branch}</p>
                <p className="text-sm text-gray-300">Marks: {edu.marks}</p>
                <p className="text-sm text-gray-300">Passing Year: {edu.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
