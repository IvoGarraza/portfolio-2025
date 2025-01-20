"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { IoIosFolderOpen } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoIosMailOpen } from "react-icons/io";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Corner from "./Corner/Corner";

const botones = [
  { title: "Home", link: "/", component: <IoIosHome size={30}></IoIosHome> },
  {
    title: "Projects",
    link: "/projects",
    component: <IoIosListBox size={30}></IoIosListBox>,
  },
  {
    title: "Contact",
    link: "/contact",
    component: <IoIosMailOpen size={30}></IoIosMailOpen>,
  },
  {
    title: "About Me",
    link: "/aboutme",
    component: <IoIosPerson size={30}></IoIosPerson>,
  },
];

const Navbar = () => {
  const [active, setActive] = useState(-1); // Usamos -1 como inicial hasta calcular el índice correcto
  const [position, setPosition] = useState(null); // Inicializamos como null
  const navRefs = useRef([]);
  const router = useRouter();
  console.log("routerrr", router.pathname);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Determina el índice activo basado en la ruta actual
      const currentPath = window.location.pathname;
      const activeIndex = botones.findIndex((bt) => bt.link === currentPath);
      console.log("currentPAth:", currentPath);
      console.log("activeIndex", activeIndex);
      if (activeIndex !== -1) {
        setActive(activeIndex);
        // Calcula la posición inicial basada en el botón activo
        const element = navRefs.current[activeIndex];
        if (element) {
          setPosition(element.offsetLeft + element.offsetWidth / 2);
        }
      }
    }
  }, []);

  useEffect(() => {
    // Actualiza la posición si el índice activo cambia
    const element = navRefs.current[active];
    if (element) {
      setPosition(element.offsetLeft + element.offsetWidth / 2);
    }
  }, [active]);

  const handleMenu = (index) => {
    setActive(index);

    // Calcula la nueva posición del span
    const element = navRefs.current[index];
    setPosition(element.offsetLeft + element.offsetWidth / 2);
  };

  return (
    <div className="h-24 w-full fixed bottom-0 border-t-[2px] border-[#090a13] bg-[#090a13] border-[2px] flex flex-row">
      {/* Renderizamos el span solo cuando `position` está definido */}
      {position !== null && (
        <motion.div
          initial={{ scale: 0, x: "-50%" }}
          animate={{ scale: 1, x: "-50%", left: position }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute -top-4 left-0 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 z-10"
        >
          {/* Contenedor de sombras detrás */}
          <div className="absolute inset-0 -z-10">
            <span
              className="w-5 h-5 bg-transparent absolute top-3.5 -left-[20px] 
            rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-5 h-5 bg-transparent absolute top-3.5 -right-[20px] 
            rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </div>

          {/* Círculo principal */}
          <span className="bg-rose-600 border-4 border-white w-16 h-16 rounded-full"></span>
        </motion.div>
      )}
      {botones.map((bt, index) => (
        <Link
          href={bt.link}
          key={index}
          ref={(el) => (navRefs.current[index] = el)} // Asignar la referencia
          onClick={() => handleMenu(index)}
          className="w-1/4 bg-[#090a13] flex flex-col items-center justify-center"
        >
          <div
            className={`${
              active == index
                ? "-translate-y-5 z-10 transition-all duration-700 text-white"
                : "text-white translate-y-3"
            }`}
          >
            {bt.component}
          </div>
          <span
            className={`${
              active === index
                ? "translate-y-1 duration-700 opacity-100 text-white font-bold"
                : "opacity-0 translate-y-10 transition-all"
            }`}
          >
            {bt.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
