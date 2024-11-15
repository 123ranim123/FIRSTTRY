"use client";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Maps from "./Maps";

const ContactUs = () => {
  return (
    <>
      <div
        className="hero relative"
        style={{
          backgroundImage:
            "url(https://whatson.ae/wp-content/uploads/2019/03/best-coworking-spaces-in-dubai.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-white text-center ">
          <div className="max-w-md mr-[200px] ">
            <h1 className="text-9xl font-bold whitespace-nowrap  ">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="  w-full mt-[15px]">
        <div className=" flex justify-center items-center gap-10 p-4 ">
          <div className="p-6 rounded-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            <h3 className="text-lg font-semibold text-center">Notre adresse</h3>
            <p className="text-center">SoHo 94 Broadway St New York, NY 1001</p>
          </div>

          <div className="p-6 rounded-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-center">
              Numéro du téléphone
            </h3>
            <p className="text-center">
              +216 55 22 30 40 <br />
            </p>
          </div>

          <div className="p-6 rounded-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <h3 className="text-lg  font-semibold text-center">EMAIL</h3>
            <p className="text-center">hello@theme.com</p>
          </div>
          <div className=" rounded-md flex  flex-col items-center">
            <div className="flex justify-center  items-center gap-2 ">
              <Link href="https://facebook.com" passHref>
                <MdFacebook size="20" />
              </Link>
              <Link href="https://linkedin.com" passHref>
                <FaLinkedin size="20" />
              </Link>
            </div>
            <h3 className="text-lg font-semibold text-center">
              resaux sociaux
            </h3>
            <p className="text-center">hello@theme.com</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 w-3/4 mx-auto">
          <div className="p-4 rounded-lg w-full">
            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              <h1 className="text-4xl font-bold text-center">Contactez-nous</h1>
            </div>
            <p className="py-4 text-center">
              Vous ne trouvez pas ce que vous cherchez ? N'hésitez pas à nous
              contacter pour toute question ou assistance.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Entrez votre nom"
                className="input input-bordered  rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500  w-full "
              />
              <input
                type="email"
                placeholder="Entrez une adresse e-mail valide"
                className="input input-bordered  rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500  w-full "
              />

              <input
                type="text"
                placeholder="Entrez votre téléphone"
                className="input input-bordered  rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500  w-full "
              />

              <textarea
                placeholder="Votre message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 w-full text-white py-2 px-10 rounded-md hover:bg-blue-700 transition duration-200 mx-auto block"
              >
                Envoyer
              </button>
            </div>
            <div className="w-full mt-10">
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
