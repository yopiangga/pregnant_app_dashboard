import React from "react";
import { NavbarDownloaderComponent } from "src/components/NavbarComponent";
import { SidebarComponent } from "src/components/SidebarComponent";

export default function DistrictLayout({ children, title }) {
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
        <NavbarDownloaderComponent />
        <div className="w-full flex">
          <SidebarComponent listMenu={listMenu} />
          {children}
        </div>

        <div></div>
      </div>
    </>
  );
}
