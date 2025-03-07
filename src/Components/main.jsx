import { createRoot } from "react-dom/client";
import { Routes, BrowserRouter, Router, Route, Link } from "react-router";
import Add from "./AddData";
import Admin from "./Admin";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="reactApp/add" element={<Add />} />
        <Route path="/reactApp" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </>
);
