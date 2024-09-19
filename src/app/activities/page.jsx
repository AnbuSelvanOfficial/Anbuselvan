import Navbar from "../components/Navbar";

export default function Activities() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-200 flex items-center justify-center">
        <div className="max-w-7xl w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-10">
            My Extra Activities
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2019
                </span>
                <h2 className="text-lg font-semibold">Workshop</h2>
              </div>
              <p className="mt-4">
                Participated in Two Days Hands-on Workshop on "Recent
                Developments in Databases".
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2020
                </span>
                <h2 className="text-lg font-semibold">Workshop</h2>
              </div>
              <p className="mt-4">
                Participated in the "State level Workshop on IoT (4.0)".
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2020
                </span>
                <h2 className="text-lg font-semibold">Workshop</h2>
              </div>
              <p className="mt-4">
                Participated in the workshop of "Part of Computer Technology in
                Tamil learning and Teaching".
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2020
                </span>
                <h2 className="text-lg font-semibold">Tech Meet</h2>
              </div>
              <p className="mt-4">
                Participated & Won I prize in PAPER PRESENTATION
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2020
                </span>
                <h2 className="text-lg font-semibold">Tech Feast</h2>
              </div>
              <p className="mt-4">
                Participated & Won prize in Quiz competition in Intercollegiate
                Meet
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  2021
                </span>
                <h2 className="text-lg font-semibold">Examination</h2>
              </div>
              <p className="mt-4">Passed MADHYAMA Examination in First Class</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
