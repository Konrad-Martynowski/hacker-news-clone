import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Ask from "../pages/Ask";
import Comments from "../pages/Comments";
import Jobs from "../pages/Jobs";
import News from "../pages/News";
import Past from "../pages/Past";
import Show from "../pages/Show";
import Submit from "../pages/Submit";

function Browser() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/news" />} />
      <Route path="/news" element={<News />} />
      <Route path="/front" element={<Past />} />
      <Route path="/newcomments" element={<Comments />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/show" element={<Show />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}

export default Browser;
