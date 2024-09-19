import React from "react";
import Link from "next/link";
import "../style.css";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-200 p-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center md:text-left">
            <p className="text-black text-xl font-semibold">HI THERE!</p>
            <h1 className="text-6xl text-black">
              I'M{" "}
              <span className="text-6xl font-bold text-black">ANBU SELVAN</span>
            </h1>

            <Link href="/about">
              <button className="px-4 py-2 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition duration-300 mt-6">
                <span className="mr-2">About Me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>

          <div className="center-content max-w-md text-left">
            <p className="text-xl">
              I am a Passionate Software Developer with expertise in web
              technologies.
              <br />
              My focus is on building Scalable, Robust, and User-friendly
              Applications.
              <br />
              I can build web applications using ReactJs || NextJs.
              <br />
              Eager to learn & work with a great team to build something
              amazing!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
