"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { IoIosFolderOpen } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoIosMailOpen } from "react-icons/io";
import { useRouter } from "next/navigation";
import {motion} from 'framer-motion'

const botones = [
  { title: "Home",link:'/', component: <IoIosHome size={30}></IoIosHome> },
  { title: "Projects",link:'/projects', component: <IoIosListBox size={30}></IoIosListBox> },
  { title: "Contact",link:'/contact', component: <IoIosMailOpen size={30}></IoIosMailOpen> },
  { title: "About Me",link:'/aboutme', component: <IoIosPerson size={30}></IoIosPerson> },
];

const Navbar = () => {
  const [active, setActive] = useState(-1); // Usamos -1 como inicial hasta calcular el índice correcto
  const [position, setPosition] = useState(null); // Inicializamos como null
  const navRefs = useRef([]);
  const router = useRouter();
  console.log('routerrr', router.pathname)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Determina el índice activo basado en la ruta actual
      const currentPath = window.location.pathname;
      const activeIndex = botones.findIndex((bt) => bt.link === currentPath);
      console.log('currentPAth:', currentPath)
      console.log('activeIndex',activeIndex)
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
    <div className="h-24 w-full fixed bottom-0 bg-white border-t- [2px] border-gray-500 flex flex-row">
      {/* Renderizamos el span solo cuando `position` está definido */}
      {position !== null && (
        <motion.span
        initial={{ scale: 0, x: "-50%" }} //Ajuste de -50 para centrar el elemento y no se posicione mal con el elemento de framer-motion
        animate={{ scale: 1, x: "-50%", left: position }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-rose-600 border-2 border-gray-900 w-16 h-16 absolute 
        -top-3 rounded-full"
        style={{
          transformOrigin: "center",
        }}
      ></motion.span>
      )}
      {botones.map((bt, index) => (
        <Link
          href={bt.link}
          key={index}
          ref={(el) => (navRefs.current[index] = el)} // Asignar la referencia
          onClick={() => handleMenu(index)}
          className="w-1/4 bg-gray-200 flex flex-col items-center justify-center"
        > 
        <div className={`${active==index ? "-translate-y-4 transition-all duration-700 text-white":"text-black translate-y-3"}`}>
          {bt.component}
        </div>
          <span
            className={`${
              active === index
                ? "translate-y-2 duration-700 opacity-100 text-black font-bold"
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
