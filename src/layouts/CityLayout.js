import React from "react";
import { NavbarUploaderComponent } from "../components/NavbarComponent";
import { SidebarComponent } from "../components/SidebarComponent";

export default function CityLayout({ children, title }) {
  const defaultTitle = "By Virtue";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const listMenu = [
    "utama",
    "postingan",
    "video",
    "artikel",
    "kategori",
    "ibu",
    "anak",
    "profile",
  ];

  return (
    <>
      <div className="bg-gray-100">
        <NavbarUploaderComponent />
        <div className="w-full flex">
          <SidebarComponent listMenu={listMenu} />
          {children}
        </div>

        <div></div>
      </div>
    </>
  );
}
