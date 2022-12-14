import React, { useContext, useState } from "react";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Logo from "src/logo.svg";

export function NavbarUploaderComponent() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white h-20 w-full px-6 shadow-sm">
      <div className="flex-none w-56 flex flex-row items-center">
        {/* <h2 className="text-dark text-xl font-bold">
          By <span className="text-indigo-600 font-bold">Certificate</span>
        </h2> */}
        <Link to="/">
          <a className="flex items-center text-2xl font-semibold text-gray-900">
            <img className="w-6 h-6 mr-2" src={Logo} alt="logo" />
            <h2 className="text-sm">
              By <span className="text-indigo-600">Virtue</span>
            </h2>
          </a>
        </Link>

        <button
          id="sliderBtn"
          className="flex-none text-right text-gray-900 hidden md:block"
        >
          <i className="fad fa-list-ul"></i>
        </button>
      </div>

      <button
        id="navbarToggle"
        className="hidden md:block md:fixed right-0 mr-6"
      >
        <i className="fad fa-chevron-double-down"></i>
      </button>

      <div className="hidden xl:flex space-x-5 items-center ml-auto text-dark">
        <button className="flex items-center hover:text-gray-600" href="#">
          <FiBell className="text-xl" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
        </button>
        <Link to={"/profile"}>
          <div className="flex items-center hover:text-gray-600">
            <span className="mr-2">{user.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function NavbarDownloaderComponent() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white h-20 w-full px-6 shadow-sm">
      <div className="flex-none w-56 flex flex-row items-center">
        {/* <h2 className="text-dark text-xl font-bold">
          By <span className="text-indigo-600 font-bold">Certificate</span>
        </h2> */}
        <Link to="/">
          <a className="flex items-center text-2xl font-semibold text-gray-900">
            <img className="w-6 h-6 mr-2" src={Logo} alt="logo" />
            <h2 className="text-sm">
              By <span className="text-indigo-600">Certificate</span>
            </h2>
          </a>
        </Link>

        <button
          id="sliderBtn"
          className="flex-none text-right text-gray-900 hidden md:block"
        >
          <i className="fad fa-list-ul"></i>
        </button>
      </div>

      <button
        id="navbarToggle"
        className="hidden md:block md:fixed right-0 mr-6"
      >
        <i className="fad fa-chevron-double-down"></i>
      </button>

      <div className="hidden xl:flex space-x-5 items-center ml-auto text-dark">
        <button className="flex items-center hover:text-gray-600" href="#">
          <FiBell className="text-xl" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
        </button>
        <Link to={"/profile"}>
          <div className="flex items-center hover:text-gray-600">
            <span className="mr-2">{user.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
