import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function ContactMe() {
  return (
    <>
      <Navbar /> 
      <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center py-10">
        <div className="max-w-7xl w-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-10">Contact Me</h1>

          <div className="text-left">
            <h2 className="text-xl font-semibold mb-4">CONTACT INFO</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-700" />
                <span>anbuselvanmca19@gmail.com</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-700" />
                <span>+91 91504 92260</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-700" />
                <span>Chennai, Tamil Nadu, India - 600 040.</span>
              </li>
            </ul>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">FOLLOW ME</h2>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100044251447119"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600 hover:text-blue-800 text-2xl" />
                </a>

                <a
                  href="https://www.instagram.com/danielanbuselvan1908/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/anbu-selvan-b12888258/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-500 hover:text-blue-700 text-2xl" />
                </a>

                <a
                  href="https://twitter.com/Navleslove08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-blue-400 hover:text-blue-600 text-2xl" />
                </a>

                <a
                  href="https://github.com/AnbuSelvanOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-800 hover:text-black text-2xl" />
                </a>

                <a
                  href="https://t.me/Anbuselvan19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="text-blue-400 hover:text-blue-600 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
