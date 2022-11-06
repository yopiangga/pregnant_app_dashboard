import React, { useContext, useEffect } from "react";
import {
  FiActivity,
  FiAward,
  FiBook,
  FiBox,
  FiCheckSquare,
  FiDownload,
  FiGift,
  FiCalendar,
  FiHome,
  FiLayers,
  FiList,
  FiPlusSquare,
  FiSlack,
  FiUser,
  FiUsers,
  FiFeather,
  FiVideo,
  FiPaperclip,
  FiType,
  FiFileText,
  FiTrendingUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { PageContext } from "../context/PageContext";
import { useLocation } from "react-router-dom";

export function SidebarComponent({ listMenu }) {
  const { page, setPage } = useContext(PageContext);
  const location = useLocation();

  useEffect(() => {
    setPage(location.pathname);
  }, [location]);

  const listPage = [
    {
      id: "home",
      link: "/",
      title: "Beranda",
      icon: FiHome,
      group: "utama",
    },
    {
      id: "thread-list",
      link: "/postingan",
      title: "Semua Postingan",
      icon: FiLayers,
      group: "postingan",
    },
    {
      id: "thread-create",
      link: "/postingan/buat",
      title: "Buat Postingan",
      icon: FiPlusSquare,
      group: "postingan",
    },
    {
      id: "video-list",
      link: "/video",
      title: "Semua Video",
      icon: FiVideo,
      group: "video",
    },
    {
      id: "video-add",
      link: "/video/buat",
      title: "Tambah Video",
      icon: FiPlusSquare,
      group: "video",
    },
    {
      id: "article-list",
      link: "/artikel",
      title: "Semua Artikel",
      icon: FiFileText,
      group: "artikel",
    },
    {
      id: "article-add",
      link: "/artikel/buat",
      title: "Tambah Artikel",
      icon: FiPlusSquare,
      group: "artikel",
    },
    {
      id: "category-list",
      link: "/kategori",
      title: "Kategori Pembelajaran",
      icon: FiType,
      group: "kategori",
    },
    {
      id: "category-add",
      link: "/kategori/tambah",
      title: "Tambah Kategori",
      icon: FiPlusSquare,
      group: "kategori",
    },
    {
      id: "mother-list",
      link: "/ibu",
      title: "Ibu",
      icon: FiUsers,
      group: "ibu",
    },
    {
      id: "mother-add",
      link: "/ibu/tambah",
      title: "Tambah Ibu",
      icon: FiPlusSquare,
      group: "ibu",
    },
    {
      id: "baby-list",
      link: "/anak",
      title: "Semua Anak",
      icon: FiUsers,
      group: "anak",
    },
    {
      id: "baby-add",
      link: "ana/tambah",
      title: "Tambah Anak",
      icon: FiPlusSquare,
      group: "anak",
    },
    {
      id: "baby-report",
      link: "/anak/laporan",
      title: "Laporan Anak",
      icon: FiTrendingUp,
      group: "anak",
    },
    {
      id: "profile",
      link: "/akun",
      title: "Akun Saya",
      icon: FiUser,
      group: "profile",
    },
  ];

  return (
    <div
      id="sideBar"
      className="flex flex-col flex-wrap bg-white text-dark border-r border-gray-100 p-6 min-h-screen w-2/12 md:shadow-xl mt-10"
    >
      <div className="flex flex-col">
        <div className="text-right hidden md:block mb-4">
          <button id="sideBarHideBtn">
            <i className="fad fa-times-circle"></i>
          </button>
        </div>

        {listPage.map((el, idx) => {
          return (
            <div key={idx}>
              {idx == 0 ? (
                <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
                  {el.group}
                </p>
              ) : (
                ""
              )}
              {idx > 0 &&
              el.group != listPage[idx - 1].group &&
              (listMenu.find((e) => {
                return e == el.group;
              }) != undefined
                ? true
                : false) ? (
                <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
                  {el.group}
                </p>
              ) : (
                ""
              )}
              {(
                listMenu.find((e) => {
                  return e == el.group;
                }) != undefined
                  ? true
                  : false
              ) ? (
                <Link
                  to={el.link}
                  className={
                    el.link == page
                      ? "mb-3 flex items-center capitalize font-medium text-sm text-indigo-600 transition ease-in-out duration-500"
                      : "mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500"
                  }
                >
                  <el.icon className="mr-3" />
                  {el.title}
                </Link>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
