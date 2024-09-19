import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blue-200 p-6">
        <div className="max-w-7xl w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl text-black font-bold mb-8 text-center">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="flex flex-col justify-center items-left">
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Name :</strong>{" "}
                <span className="text-black font-bold">ANBU SELVAN R</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Date of Birth :</strong>{" "}
                <span className="text-black font-bold">19 Aug 2001</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Qualification :</strong>{" "}
                <span className="text-black font-bold">MCA</span>
              </p>
              <p className="text-xl  text-gray-800 mb-4">
                <strong className="font-semibold">Marital Status :</strong>{" "}
                <span className="text-black font-bold">Single</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Nationality :</strong>{" "}
                <span className="text-black font-bold">Indian</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Language Known :</strong>{" "}
                <span className="text-black font-bold">English</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="bg-black text-white text-center px-8 py-4 rounded w-full md:w-64 h-32 flex items-center justify-center">
                <h2 className="text-xl font-bold">
                  BEGINNER in SOFTWARE DEVELOPMENT
                </h2>
              </div>

              <div className="bg-black text-white text-center px-8 py-4 rounded w-full md:w-64 h-32 flex items-center justify-center">
                <h2 className="text-3xl font-bold">5+</h2>
                <p className="text-lg">Projects completed</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="https://anbuselvanofficial.web.app/images/Photo1.png"
                alt="Anbu Selvan R"
                className="w-72 rounded-xl border-1 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
