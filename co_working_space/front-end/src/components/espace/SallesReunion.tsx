import React from "react";

const SallesReunion = () => {
  return (
    <>
      <div>
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-100">
            <div className="relative ">
              <img
                src="https://leechambers.org/wp-content/uploads/2020/06/20.-Who-Uses-Coworking-Spaces-Here%E2%80%99s-Everything-to-Know.jpg"
                alt="Co-Work Space"
                className="w-[700px] h-[500px] object-cover rounded-md shadow-md  mt-10 ml-10  h-90 max-w-s"
              />
              <div className="absolute top-[-65px] left-[-65px] text-white pl-[45px] pt-[45px] md:p-15">
                <img
                  src="https://hubble.imgix.net/listings/uploads/spaces/12049/53415414297_5662684ea6_z.jpg?auto=format%2Ccompress&ar=4%3A3&fit=crop&q=30&w=3840"
                  alt="Co-Work Space"
                  className="w-[350px] h-[250px] object-cover rounded-md shadow-md  mt-10 ml-10  h-90"
                />
              </div>
            </div>
            <div className="ml-8">
              <h3 className="text-4xl font-bold text-black mb-4">
                Nous vous fournissons un espace de travail confortable{" "}
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez des espaces de travail d'exception, conçus pour
                inspirer et favoriser la productivité, tout en vous connectant à
                des activités enrichissantes et à une communauté solidaire. Un
                lieu où entreprises et particuliers trouvent l'inspiration et la
                collaboration nécessaires pour exceller.
              </p>
            </div>
          </div>

          <div className="bg-white h-[200px]">
            <div className=" flex justify-center items-center gap-10 p-4 bg-slate-100 mt-[20px] mr-[40px] ml-[40px]  rounded-md ">
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
                <h3 className="text-lg font-semibold text-center">
                  Notre adresse
                </h3>
                <p className="text-center">
                  SoHo 94 Broadway St New York, NY 1001
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-center">
                  Numéro du téléphone
                </h3>
                <p className="text-center">
                  +216 55 22 30 40 <br /> +216 71 51 18 18
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
                <h3 className="text-lg font-semibold text-center">EMAIL</h3>
                <p className="text-center">hello@theme.com</p>
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
                <h3 className="text-lg font-semibold text-center">EMAIL</h3>
                <p className="text-center">hello@theme.com</p>
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
                <h3 className="text-lg font-semibold text-center">EMAIL</h3>
                <p className="text-center">hello@theme.com</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-100">
            <div className="ml-8 ">
              <h3 className="text-4xl font-bold text-black mb-4">
                Nous vous fournissons un espace de travail confortable{" "}
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez des espaces de travail d'exception, conçus pour
                inspirer et favoriser la productivité, tout en vous connectant à
                des activités enrichissantes et à une communauté solidaire. Un
                lieu où entreprises et particuliers trouvent l'inspiration et la
                collaboration nécessaires pour exceller.
              </p>
            </div>

            <div className="relative  ">
              <img
                src="https://leechambers.org/wp-content/uploads/2020/06/20.-Who-Uses-Coworking-Spaces-Here%E2%80%99s-Everything-to-Know.jpg"
                alt="Co-Work Space"
                className="w-[700px] h-[500px] object-cover rounded-md shadow-md  mt-10 ml-10  h-90 max-w-s"
              />
              <div className="absolute top-[-65px] left-[-65px] text-white pl-[45px] pt-[45px] md:p-15">
                <img
                  src="https://hubble.imgix.net/listings/uploads/spaces/12049/53415414297_5662684ea6_z.jpg?auto=format%2Ccompress&ar=4%3A3&fit=crop&q=30&w=3840"
                  alt="Co-Work Space"
                  className="w-[350px] h-[250px] object-cover rounded-md shadow-md  mt-10 ml-10  h-90"
                />
              </div>
            </div>
          </div>
        </>
      </div>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box"
          />
        </div>
      </div>
    </>
  );
};

export default SallesReunion;
