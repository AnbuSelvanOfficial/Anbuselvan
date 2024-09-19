import Navbar from "../components/Navbar";

export default function Education() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-200 flex items-center justify-center">
        <div className="max-w-7xl w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-10">My Education</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2015
                </span>
                <h2 className="text-lg font-semibold">Computer Education</h2>
              </div>
              <p className="mt-4">
                Diploma Course - OFFICE AUTOMATION, C, CPP &amp; Java
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2017
                </span>
                <h2 className="text-lg font-semibold">Secondary Education</h2>
              </div>
              <p className="mt-4">
                88.6% - Holy Cross Convent Matriculation School, Dindigul - TN
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2019
                </span>
                <h2 className="text-lg font-semibold">Higher Education</h2>
              </div>
              <p className="mt-4">
                Computer Maths - 62.66% - Holy Cross Convent Matriculation
                School, Dindigul - TN
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2022
                </span>
                <h2 className="text-lg font-semibold">Under-Graduate</h2>
              </div>
              <p className="mt-4">
                B.Sc Computer Science, 74.97% - PASC College, under MK
                University, Dindigul - TN
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2022
                </span>
                <h2 className="text-lg font-semibold">Computer Education</h2>
              </div>
              <p className="mt-4">
                Skilled in frameworks of ReactJs, React-Native, Flutter.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2024
                </span>
                <h2 className="text-lg font-semibold">Post-Graduate</h2>
              </div>
              <p className="mt-4">
                Master of Computer Application in RVS CE - Dgl under Anna
                University - TN
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
