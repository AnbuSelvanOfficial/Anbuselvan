import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-200 flex items-center justify-center">
        <div className="max-w-7xl w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Android App
                </span>
                <h2 className="text-lg font-semibold">React Native</h2>
              </div>
              <p className="mt-4">
                An Android Application build using React Native & Expo Go for
                people or Organization who needs Blood for Emergency.
              </p>
              <a
                href="https://github.com/AnbuSelvanOfficial/Blood-App"
                target="_blank"
                className="mt-4 inline-block px-2 py bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Code
              </a>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Web App
                </span>
                <h2 className="text-lg font-semibold">React Js</h2>
              </div>
              <p className="mt-4">
                An To-Do List web based Application build using React Js.
              </p>
              <a
                href="https://todolist-d5cf8.web.app/"
                target="_blank"
                className="mt-4 inline-block px-2 py bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View App
              </a>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Website
                </span>
                <h2 className="text-lg font-semibold">HTML,CSS,Js</h2>
              </div>
              <p className="mt-4">
                My Portfolio Website build using simple HTML, CSS, Js.
              </p>
              <a
                href="https://anbuselvanofficial.web.app"
                target="_blank"
                className="mt-4 inline-block px-2 py bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Website
              </a>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Android App
                </span>
                <h2 className="text-lg font-semibold">React Native</h2>
              </div>
              <p className="mt-4">
                An Android Application build using React Native & Expo Go,
                NodeJs, Firebase for Staff and Student Mentoring System for
                their Semester Projects.
              </p>
              <a
                href="https://github.com/AnbuSelvanOfficial/promentor"
                target="_blank"
                className="mt-4 inline-block px-2 py bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Code
              </a>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Android App
                </span>
                <h2 className="text-lg font-semibold">React Native</h2>
              </div>
              <p className="mt-4">
                An Android Application build using React Native & Expo Go,
                NodeJs, Firebase for View and Review for Latest Movies.
              </p>
              <a
                href="https://github.com/AnbuSelvanOfficial/movies-mania"
                target="_blank"
                className="mt-4 inline-block px-2 py bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Code
              </a>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Web App
                </span>
                <h2 className="text-lg font-semibold">Next Js</h2>
              </div>
              <p className="mt-4">
                My Portfolio Web App build using Next Js 14.0.2
              </p>
              <a
                href="https://anbuselvan.vercel.app/"
                target="_blank"
                className="mt-4 inline-block px-2 py bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
