import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import CityLayout from "../../layouts/CityLayout";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";

export default function CityRouterPage() {
  return (
    <BrowserRouter>
      <CityLayout>
        <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>

          <Routes>
            <Route path="/profile" element={<ProfilePage />} exact />
          </Routes>
        </div>
      </CityLayout>
    </BrowserRouter>
  );
}
