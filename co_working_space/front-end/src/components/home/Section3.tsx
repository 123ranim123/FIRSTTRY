"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import "../../style/section3.css";

const Section3: React.FC = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  const activate = (direction: "next" | "prev") => {
    const slider = sliderRef.current;
    if (slider) {
      const items = slider.querySelectorAll(".item");
      if (direction === "next") {
        slider.append(items[0]);
      } else {
        slider.prepend(items[items.length - 1]);
      }
    }
  };

  return (
    <>
      <div className="mx-auto pl-[50px] pr-[50px] my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        <h1 className="text-4xl font-bold text-center">Nos Services</h1>
      </div>
      <div className="relative w-full mt-[-20px] pl-[50px] pr-[50px] pt-[70px] h-screen flex  items-center justify-center overflow-hidden">
        <ul ref={sliderRef} className="relative w-full h-full flex">
          <li
            className="item absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] bg-cover bg-center rounded-2xl shadow-lg inset-shadow transition-transform duration-700 border-4  border-slate-100 ease-in-out"
            style={{
              backgroundImage:
                "url('https://yoyomeeting.com/wp-content/uploads/2020/05/large-coworkiing-conference-rooms-1024x576.jpg')",
            }}
          >
            <div className="content absolute top-1/2 left-12 transform -translate-y-1/2 text-black opacity-0 transition-opacity duration-700  ease-in-out">
              <h2 className="title font-bold text-2xl uppercase">
                "Salle de Réunion "
              </h2>
              <p className=" mt-4 mb-6 text-2xl  leading-relaxed">
                Une salle de réunion moderne équipée de la dernière technologie
                pour vos présentations et conférences.
              </p>
              <button className="btn btn-outline ">En Savoir Plus</button>
            </div>
          </li>

          <li
            className="item absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] bg-cover bg-center rounded-2xl shadow-lg inset-shadow transition-transform duration-700 border-4 border-slate-100 ease-in-out"
            style={{
              backgroundImage:
                "url('https://wegal-space.com/wp-content/uploads/2023/10/Salle-de-formation-et-conference-bureau-professionnel-a-louer-wifi-haut-debit-espace-de-coworking-10.webp')",
            }}
          >
            <div className="content absolute top-1/2 left-12 transform -translate-y-1/2 text-white opacity-0 transition-opacity duration-700 ease-in-out">
              <h2 className="title font-black  text-2xl uppercase">
                "Salle d'Événement"
              </h2>
              <p className=" mt-4 mb-6  text-2xl leading-relaxed">
                Un espace polyvalent pour organiser des événements, des fêtes et
                des rassemblements.
              </p>
              <button className="btn btn-outline">En Savoir Plus</button>
            </div>
          </li>
          <li
            className="item absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] bg-cover bg-center rounded-2xl shadow-lg inset-shadow transition-transform duration-700 border-4 border-slate-100 ease-in-out"
            style={{
              backgroundImage:
                "url('https://www.workingspacefactory.com/wp-content/uploads/2022/01/img_2783_optimized-1024x768.jpg?x45483')",
            }}
          >
            <div className="content absolute top-1/2 left-12 transform -translate-y-1/2 text-white opacity-0 transition-opacity duration-700 ease-in-out">
              <h2 className="title font-black text-2xl uppercase">
                "Bureaux Privés"
              </h2>
              <p className=" mt-4 mb-6  text-2xl leading-relaxed">
                Bureaux privés et confortables pour travailler en toute
                tranquillité.
              </p>
              <button className="btn btn-outline">En Savoir Plus</button>
            </div>
          </li>
          <li
            className="item absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] bg-cover bg-center rounded-2xl shadow-lg inset-shadow transition-transform duration-700 border-4 border-slate-100 ease-in-out"
            style={{
              backgroundImage:
                "url('https://i0.wp.com/blog.archibien.com/wp-content/uploads/espace-coworking-architecte-archibien.jpg?fit=1860%2C1240&ssl=1')",
            }}
          >
            <div className="content absolute top-1/2 left-12 transform -translate-y-1/2 text-white opacity-0 transition-opacity duration-700 ease-in-out">
              <h2 className="title font-black text-2xl uppercase">
                "Bureaux Partagés"
              </h2>
              <p className=" mt-4 mb-6  text-2xl leading-relaxed">
                Espaces de travail partagés pour la collaboration et
                l'innovation.
              </p>
              <button className="btn btn-outline">En Savoir Plus</button>
            </div>
          </li>
        </ul>
        <nav className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          <button
            className="btn prev bg-white bg-opacity-50 p-2 rounded-full cursor-pointer"
            onClick={() => activate("prev")}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="btn next bg-white bg-opacity-50 p-2 rounded-full cursor-pointer"
            onClick={() => activate("next")}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Section3;
