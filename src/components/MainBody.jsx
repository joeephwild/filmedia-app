import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Search,
  Library,
  Upload,
  Profile,
  AlbumDetails,
  Ticket,
  Livestream,
  CreateAccount,
  Dashboard,
} from "../pages";
import Concert from "../pages/Concert";

const MainBody = () => {
  return (
    <section className="">
      <Routes>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/search" element={<Search />} />
        <Route path="/dashboard/library" element={<Library />} />
        <Route path="/dashboard/upload" element={<Upload />} />
        <Route path="/dashboard/profile/:id" element={<Profile />} />
        <Route path="/dashboard/Album/:id" element={<AlbumDetails />} />
        <Route path="/dashboard/ticket" element={<Ticket />} />
        <Route path="/dashboard/stream" element={<Livestream />} />
        <Route path="/dashboard/ticket/:id" element={<Concert />} />
      </Routes>
    </section>
  );
};

export default MainBody;
