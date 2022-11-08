import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { CategoryPage } from "./category/CategoryPage";
import { CategoryAddPage } from "./category/CategoryAddPage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { CategoryEditPage } from "./category/CategoryEditPage";
import { MotherPage } from "./mother/MotherPage";
import { MotherEditPage } from "./mother/MotherEditPage";
import { ArticleAddPage } from "./article/ArticleAddPage";
import { ArticlePage } from "./article/ArticlePage";
import { ArticleEditPage } from "./article/ArticleEditPage";
import { VideoPage } from "./video/VideoPage";
import { VideoAddPage } from "./video/VideoAddPage";
import { VideoEditPage } from "./video/VideoEditPage";

export default function AdminRouterPage() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
          <Routes>
            <Route path="/video" element={<VideoPage />} exact />
          </Routes>
          <Routes>
            <Route path="/video/buat" element={<VideoAddPage />} exact />
          </Routes>
          <Routes>
            <Route path="/video/edit" element={<VideoEditPage />} exact />
          </Routes>
          <Routes>
            <Route path="/artikel" element={<ArticlePage />} exact />
          </Routes>
          <Routes>
            <Route path="/artikel/buat" element={<ArticleAddPage />} exact />
          </Routes>
          <Routes>
            <Route path="/artikel/edit" element={<ArticleEditPage />} exact />
          </Routes>
          <Routes>
            <Route path="/kategori" element={<CategoryPage />} exact />
          </Routes>
          <Routes>
            <Route
              path="/kategori/tambah"
              element={<CategoryAddPage />}
              exact
            />
          </Routes>
          <Routes>
            <Route path="/kategori/edit" element={<CategoryEditPage />} exact />
          </Routes>
          <Routes>
            <Route path="/ibu" element={<MotherPage />} exact />
          </Routes>
          <Routes>
            <Route path="/ibu/edit" element={<MotherEditPage />} exact />
          </Routes>

          <Routes>
            <Route path="/akun" element={<ProfilePage />} exact />
          </Routes>
        </div>
      </AdminLayout>
    </BrowserRouter>
  );
}
