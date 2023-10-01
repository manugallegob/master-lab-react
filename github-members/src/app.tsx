import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../src/components/login";
import { ListPage } from "./components/list";
import { DetailPage } from "./components/detail";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
