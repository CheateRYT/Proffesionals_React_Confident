import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./Data.Provider";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersList } from "./components/UsersList";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </AppProvider>
  </BrowserRouter>
);
