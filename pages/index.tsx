/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "next/font/google";

import { BsBriefcase, BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { GoNote } from "react-icons/go";

import Image from "next/image";
import deved from "../public/portada2.jpg";

import exoOtaku from "../public/exootaku.png";
import exoOtakuDark from "../public/exootakusinfondo.png";
import raes from "../public/raes.png";
import appCountries from "../public/appCountries.png";

import html from "../assests/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-96.png";
import css from "../assests/icons8-css3-96.png";
import js from "../assests/icons8-javascript-96.png";
import react from "../assests/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
import redux from "../assests/icons8-redux-96.png";
import mysql from "../assests/icons8-logo-de-mysql-96.png";
import mui from "../assests/icons8-material-ui-96.png";
import cui from "../assests/icons8-chakra-ui-96.png";
import tw from "../assests/icons8-tailwind-css-96.png";
import next from "../assests/1200px-Nextjs-logo.svg.png";
import express from "../assests/express.webp";
import node from "../assests/icons8-nodejs-96.png";
import postgress from "../assests/icons8-postgresql-96.png";
import ts from "../assests/icons8-typescript-96.png";
import java from "../assests/icons8-java-629.png";

import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 3,
    src: js,
    title: "javascript",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 4,
    src: react,
    title: "react",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 5,
    src: redux,
    title: "redux",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 6,
    src: mysql,
    title: "mysql",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 7,
    src: mui,
    title: "materialui",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 8,
    src: cui,
    title: "chakraui",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 9,
    src: tw,
    title: "tailwild",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 10,
    src: next,
    title: "nextjs",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 11,
    src: express,
    title: "express",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 12,
    src: node,
    title: "nodejs",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 13,
    src: postgress,
    title: "postgress",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 14,
    src: ts,
    title: "typescript",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
  {
    id: 15,
    src: java,
    title: "java",
    style: "shadow-blue-700 dark:shadow-gray-300",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [showIcons, setShowIcons] = useState(false);

  const handleButtonClick = () => {
    setShowIcons(!showIcons);
  };

  function handleLinkClick(event: {
    preventDefault: () => void;
    currentTarget: { getAttribute: (arg0: string) => any };
  }) {
    event.preventDefault(); // Evita que el enlace se transporte automáticamente

    const targetId = event.currentTarget.getAttribute("href"); // Obtiene el ID de la sección objetivo

    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth", // Desplazamiento suave
    });
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Facundo Zanandrea Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-teal-100 px-10  md:px-20 dark:bg-gray-900">
        <section id="inicio">
          <nav className="3xl:hidden fixed top-0 left-0 right-0 bg-opacity-80  w-6/12 m-auto  bg-gray-900 shadow-lg rounded-b-lg dark:bg-white dark:text-black dark:bg-opacity-50  z-10">
            <div className="hidden ml-6 md:block">
              <div className="flex max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-12">
                  <div className="flex justify-end">
                    <a className=" font-Tragicastle lg:text-3xl text-2xl  text-white ml-2 dark:text-gray-900">
                      FZ
                    </a>
                  </div>
                  <div className="ml-10 flex space-x-4 items-center justify-center">
                    <a
                      href="#inicio"
                      className="text-gray-300 hover:text-white dark:text-gray-900 dark:hover:text-white px-3 text-md font-semibold"
                      onClick={handleLinkClick}
                    >
                      Inicio
                    </a>
                    <a
                      href="#sobreMi"
                      className="text-gray-300  hover:text-white dark:text-gray-900 dark:hover:text-white px-3 text-md font-semibold "
                      onClick={handleLinkClick}
                    >
                      Sobre mí
                    </a>
                    <a
                      href="#portfolio"
                      className="text-gray-300  hover:text-white dark:text-gray-900 dark:hover:text-white px-3 text-md font-semibold "
                      onClick={handleLinkClick}
                    >
                      Mis Proyectos
                    </a>
                    <a
                      href="#tecnologia"
                      className="text-gray-300  hover:text-white dark:text-gray-900 dark:hover:text-white px-3 text-md font-semibold "
                      onClick={handleLinkClick}
                    >
                      Tecnologias
                    </a>
                    <a
                      href="#contact"
                      className="text-gray-300 0 hover:text-white dark:text-gray-900 dark:hover:text-white px-3 text-md font-semibold "
                      onClick={handleLinkClick}
                    >
                      Contacto
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <nav className="3xl:hidden fixed top-0 left-0 right-0 bg-opacity-80  w-9/12 lg:w-6/12 m-auto  bg-gray-900 shadow-lg rounded-b-lg dark:bg-white dark:text-black dark:bg-opacity-50 z-10">
              <div
                className="md:hidden flex justify-center h-10 mr-1"
                id="mobile-menu"
              >
                <div className="flex-shrink-0 ">
                  <button onClick={handleButtonClick}>
                    <a className=" font-Tragicastle lg:text-3xl text-2xl  text-white hover:text-white dark:text-gray-900  lg:ml-2">
                      FZ
                    </a>
                  </button>
                </div>
                {showIcons && (
                  <div className="pb-3 px-2 space-y-1 flex column-reverse duration-500">
                    <>
                      <a
                        href="#inicio"
                        className="text-gray-300 hover:text-white dark:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        onClick={handleLinkClick}
                      >
                        <AiOutlineHome />
                      </a>
                      <a
                        href="#sobreMi"
                        className="text-gray-300  hover:text-white dark:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        onClick={handleLinkClick}
                      >
                        <GoNote />
                      </a>
                      <a
                        href="#portfolio"
                        className="text-gray-300  hover:text-white dark:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        onClick={handleLinkClick}
                      >
                        <BsBriefcase />
                      </a>
                      <a
                        href="#tecnologia"
                        className="text-gray-300  hover:text-white dark:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        onClick={handleLinkClick}
                      >
                        <FaReact />
                      </a>
                      <a
                        href="#contact"
                        className="text-gray-300  hover:text-white dark:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        onClick={handleLinkClick}
                      >
                        <AiOutlineMail />
                      </a>
                    </>
                  </div>
                )}
              </div>
            </nav>
          </nav>
        </section>

        <section className="mb-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 dark:text-white">
            <div className="flex justify-center m-5 md:m-10">
              <h1 className="text-5xl font-burtons dark:text-white">
                developed by Piki
              </h1>
            </div>
            <div className="flex items-center justify-center m-5 md:m-32">
              <div className="flex items-center justify-center">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-3xl dark:text-white"
                />
              </div>
              <div className="ml-14">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-3 rounded-lg ml-9"
                  href="https://drive.google.com/drive/folders/12clGK05ki0DU5gWq9z15-UNdATZgvDt6"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:items-center sm:grid sm:grid-cols-2">
            <div className=" w-auto">
              <h2 className="text-3xl text-teal-600 font-medium md:text-6xl flex justify-center items-center dark:text-gray-300">
                Hola a Todos!
              </h2>
              <div className="flex justify-center items-center">
                <h3 className="text-2xl text-gray-800 md:text-xl md: text-center dark:text-gray-300">
                  Mi nombre es{" "}
                  <span className="text-teal-500"> Facundo Zanandrea</span> y
                  soy{" "}
                  <span className="text-teal-500">
                    {" "}
                    Desarrollador Web Full Stack
                  </span>
                </h3>
              </div>
              <div className="lg:flex lg:justify-center lg:gap-14 lg:items-center grid justify-center">
                <a
                  href="#portfolio"
                  className="group text-white w-fit px-6 py-3 my-2 mx-1 
                flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer"
                  onClick={handleLinkClick} // Agrega un controlador de eventos de clic
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdKeyboardArrowDown size={25} className="ml-1" />
                  </span>
                </a>
                <div className="lg:col-span-3 lg:text-3xl lg:py-3 lg:inline-block ml-4 text-2xl py-3 dark:text-white">
                  <Link
                    href={"https://twitter.com/FacuZanandrea"}
                    target="_blank"
                  >
                    <AiFillTwitterCircle className="cursor-pointer" />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/facundo-zanandrea-884958247/"
                    }
                    target="_blank"
                    className="px-5"
                  >
                    <AiFillLinkedin className="cursor-pointer" />
                  </Link>
                  <Link
                    href={"https://github.com/Facuzanan88/"}
                    target="_blank"
                  >
                    <AiFillGithub className="cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 lg:w-80 lg:h-80 mt-10 mb-10 overflow-hidden">
              <Image
                src={deved}
                fill
                className="object-cover"
                alt="foto-perfil"
              />
            </div>
          </div>
        </section>

        <section id="sobreMi">
          <div>
            <div>
              <h3 className="text-5xl py-6 text-center dark:text-white">
                Sobre mi
              </h3>
            </div>

            <h4 className="text-3xl dark:text-gray-300">Quien soy?</h4>
            <p className="text-xl leading-8 text-gray-800 text-center font-bold dark:text-gray-300">
              Desarrollador Web{" "}
              <span className="text-teal-500">Full Stack</span> apasionado por
              lo que hace, siempre en búsqueda de nuevos conocimientos con gran
              habilidad para enfrentar nuevos desafíos. Amante del trabajo en
              equipo y las buenas prácticas. Cuando no estoy codificando, puedes
              encontrarme sumergiéndome en varios temas como música, economía y
              levantamiento de pesas.
            </p>
            <h4 className="text-3xl dark:text-gray-300">Porque yo?</h4>
            <p className="text-xl py-2 leading-8 text-gray-800 text-center font-bold dark:text-gray-300">
              Me logro adaptar rápidamente al ambiente de trabajo, generando un
              clima cálido de convivencia. Me mantengo proactivo y participativo
              al debate. Siempre optimista y en búsqueda de soluciones. Rendirse
              nunca es una opción en mi filosofía de vida. Considero que la
              perseverancia y la práctica hacen al maestro.
            </p>
            <h4 className="text-3xl dark:text-gray-300">Perfil Laboral</h4>
            <p className="text-xl py-2 leading-8 text-gray-800 text-center font-bold dark:text-gray-300">
              Una perspectiva completa es clave para comprender y desarrollar
              soluciones innovadoras. Como individuo organizado y orientado a
              los detalles, me enorgullezco de ser un solucionador de problemas
              efectivo con un gran sentido del humor. Me apasiona colaborar con
              personas de ideas afines que comparten mi dedicación para crear
              experiencias valiosas y agradables para los usuarios.
              ¡Construyamos algo grandioso juntos!
            </p>
          </div>
        </section>

        <section id="portfolio">
          <div>
            <h3 className="text-5xl py-6 text-center dark:text-white">
              Mis Proyectos
            </h3>
          </div>
          <div className="lg:grid first-letter lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-1">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gradient-to-b from-gray-700 to-gray-400">
              <Image
                src={darkMode ? exoOtakuDark : exoOtaku}
                alt={""}
                width={200}
                height={200}
                className="to-black"
              />
              <h3 className="text-xl font-bold ">E-Commerce Exo-Otaku</h3>
              <p className="py-1 text-lg dark:text-gray-800">
                Desarrollo de una SPA para una tienda de ropa donde puedes
                acceder como invitado, comprador o administrador con un panel
                personalizado para cada acceso. Incluye registro y gestión de
                inicio de sesión a través de Auth0, Stripe como pasarela de
                pago, carrito de compras, historial de transacciones y lista de
                deseos.
              </p>
              <h4 className="text-lg text-teal-600"> Tools </h4>
              <p className="text-gray-800 ">React / Redux</p>
              <p className="text-gray-800">MaterialUI / Auth0 / Cloudinary</p>
              <p className="text-gray-800 ">React / Node</p>
              <p className="text-gray-800 ">Sequelize / PostgreSQL</p>

              <div className="lg:flex lg:flex-row py-5 gap-10 md:justify-center md:flex-col">
                <div className="mb-8">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-14 py-2 rounded-md"
                    href="https://github.com/Santirbe98/PF-ExoOtaku"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-14 py-2 rounded-md "
                    href="https://pf-exo-otaku.vercel.app/"
                    target="_blank"
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gradient-to-b from-gray-700 to-gray-400">
              <Image
                src={raes}
                alt={""}
                width={200}
                height={200}
                className="to-black"
              />
              <h3 className="text-xl font-bold ">Raes Inversiones</h3>
              <p className="py-1 text-lg dark:text-gray-800">
                Participación en el desarrollo de un proyecto para una
                inmobiliaria local. Web destinada a mostrar propiedades en venta
                y/o alquiler. Tambien se puede visualizar un panel tanto para
                usuario como para administradores y ciertas propiedades como
                filtrado. Raes Inversiones, empresa inmobiliaria ubicada en
                Santa Fe Capital, Sante Fe, Argentina.
              </p>
              <h4 className="text-lg text-teal-600"> Tools </h4>
              <p className="text-gray-800 ">React / Redux</p>
              <p className="text-gray-800">TypeScript</p>
              <p className="text-gray-800 ">Express / Node</p>
              <p className="text-gray-800 ">Sequelize / mySQL / ChakraUI</p>
              <div className="lg:flex lg:flex-row py-5 gap-10 md:justify-center md:flex-col">
                <div className="mb-8">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-14 py-2 rounded-md"
                    href="https://github.com/salvaarmanasco/Proyecto-Inmobiliario"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-14 py-2 rounded-md "
                    href=""
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gradient-to-b from-gray-700 to-gray-400">
              <Image
                src={appCountries}
                alt={""}
                width={200}
                height={200}
                className="contrast-100"
              />
              <h3 className="text-xl font-bold ">App Countries</h3>
              <p className="py-1 text-lg dark:text-gray-800">
                Desarrollo de una SPA que integra todas las tecnologías vistas
                en el Bootcamp de Henry y consuma API externa a través del Back
                End. En La aplicación podemos visualizar las banderas de
                diferentes paises del mundo y sus características. Nos permite
                poder hacer filtrados, ordenamientos y sumar actividades a los
                paises.
              </p>
              <br></br>
              <h4 className="text-lg text-teal-600"> Tools </h4>
              <p className="text-gray-800 ">React / Redux</p>
              <p className="text-gray-800"> </p>
              <p className="text-gray-800 ">Express/ Node</p>
              <p className="text-gray-800 ">Sequelize / PostgreSQL</p>
              <div className="lg:flex lg:flex-row py-5 gap-10 md:justify-center md:flex-col">
                <div className="mb-8">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-14 py-2 rounded-md"
                    href="https://github.com/Facuzanan88/PI-Countries"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-14 py-2 rounded-md "
                    href="https://pi-countries-khaki.vercel.app/"
                    target="_blank"
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologia">
          <div>
            <h3 className="text-5xl py-6 text-center dark:text-white">
              Tecnologias
            </h3>
          </div>
          {/* quito el h-screen que es el que me lo extiende por sobre las otras secciones */}
          <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
            <div>
              <p className="text-xl dark:text-gray-300">
                Tecnologias con las que he trabajado
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-3 gap-12 text-center py-8 px-10 sm:px-0 sm:flex sm:flex-col sm:py-10">
              {techs.map(({ id, src, title, style }) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 my-4 rounded-lg ${style}`}
                >
                  <picture>
                    <Image
                      src={src}
                      alt={"html"}
                      width={55}
                      height={55}
                      className="w-20 mx-auto mt-4"
                    />
                  </picture>
                  <p className="mt-4 font-burtons text-xl dark:text-gray-300">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div>
            <h3 className="text-5xl py-6 text-center dark:text-white">
              Contacto
            </h3>
          </div>
          <div className="w-full h-screen flex justify-center items-center">
            <form
              action="https://getform.io/f/d1e99e59-27e8-4877-9d6b-cb6f66f66ae2"
              method="POST"
              className="flex flex-col w-full md:w-1/2 justify-center items-center"
            >
              <div className="py-10">
                <label
                  className="block uppercase font-burtons tracking-wide text-gray-700 dark:text-gray-400 font-bold p-3"
                  htmlFor="grid-password"
                >
                  NOMBRE
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                  className="p-2 h-20 text-lg text-center font-burtons  bg-transparent lg:w-96 border-2 rounded-md dark:text-white focus:outline-none sm:w-40"
                />
              </div>
              <div className="py-5">
                <label
                  className="block uppercase font-burtons tracking-wide text-gray-700 dark:text-gray-400 font-bold p-3"
                  htmlFor="grid-password"
                >
                  E-Mail
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ingrese su E-mail"
                  className="p-2 h-20 text-lg text-center font-burtons  bg-transparent lg:w-96 border-2 rounded-md dark:text-white focus:outline-none sm:w-40"
                />
              </div>
              <div className="py-5">
                <label
                  className="block uppercase font-burtons tracking-wide text-gray-700 dark:text-gray-400 font-bold p-3"
                  htmlFor="grid-password"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  placeholder="Ingrese su mensaje"
                  rows={10}
                  className="p-2 bg-transparent w-96  border-2 rounded-md dark:text-white focus:outline-none  h-40 text-lg text-center font-burtons  lg:w-96  sm:w-40"
                />
              </div>
              <button className="text-slate-700 font-burtons text-3xl bg-gradient-to-b from-gray-800 to-gray-500row px-6 py-3 my-8 w-36 lg:h-14 mx-auto flex rounded-md hover:scale-110 duration-300 cursor-pointer text-right items-center">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
