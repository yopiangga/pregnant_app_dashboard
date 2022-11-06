import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { CategoryPage } from "./category/CategoryPage";
import { CategoryAddPage } from "./category/CategoryAddPage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { CategoryEditPage } from "./category/CategoryEditPage";

export default function AdminRouterPage() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
          <Routes>
            <Route path="/kategori" element={<CategoryPage />} exact />
          </Routes>
          <Routes>
            <Route path="/kategori/edit" element={<CategoryEditPage />} exact />
          </Routes>
          <Routes>
            <Route
              path="/kategori/tambah"
              element={<CategoryAddPage />}
              exact
            />
          </Routes>
          <Routes>
            <Route path="/akun" element={<ProfilePage />} exact />
          </Routes>
        </div>
      </AdminLayout>
    </BrowserRouter>
  );
}
