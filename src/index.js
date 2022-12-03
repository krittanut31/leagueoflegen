import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import News from "./page/News";
import Champions from "./page/Champions";
import Items from "./page/Items";
import Tutorial from "./page/Tutorial";
import Help from "./page/Help";
import Download from "./page/Download";
import Topup from "./page/Topup";
import Character from "./page/Character";
import Singin from "./page/Singin";
import Register from "./page/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="news" element={<News />} />
        <Route path="champions" element={<Champions />}>
          {/* <Route path="champions/character" element={<Character />} /> */}
        </Route>
        <Route path="items" element={<Items />} />
        <Route path="tutorial" element={<Tutorial />} />
        <Route path="help" element={<Help />} />
        <Route path="download" element={<Download />} />
        <Route path="topup" element={<Topup />} />
        <Route path="champions/character" element={<Character />} />
        <Route path="singin" element={<Singin />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
