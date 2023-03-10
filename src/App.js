import { Stream } from "@xmtp/xmtp-js";
import { Route, Routes } from "react-router-dom";
import {  MainBody } from "./components";
import {
  Home,
  Search,
  Library,
  Upload,
  AlbumDetails,
  Ticket,
  Livestream,
  Playlist,
  CreateAccount,
  HomePage,
  LoginScreen,
  Concert,
  ProfileDetails,
  Profile,
} from "./pages";
import { Videos } from './components';

function App() {
  return (
    <div className="bg-gradient-to-br h-screen from-[#111111] to-[#000080]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/account" element={<CreateAccount />} />
        <Route element={<MainBody />}>
          <Route path="/home" element={<Home />} />
        <Route path="/dashboard/upload" element={<Upload />} />
          <Route path="/dashboard/search" element={<Search />} />
          <Route path="/dashboard/library" element={<Library />} />
          <Route path="/dashboard/profile/:id" element={<ProfileDetails />} />
          <Route path="/dashboard/Album/:id" element={<AlbumDetails />} />
          <Route path="/dashboard/ticket" element={<Ticket />} />
          <Route path="/dashboard/stream" element={<Livestream />} />
          <Route path="/dashboard/ticket/:id" element={<Concert />} />
          <Route path="/dashboard/playlist" element={<Playlist />} />
          <Route path="/profile" element={<Profile />}  />
          <Route path="/stream/:id" element={<Stream />} />
          <Route path="/videos" element={<Videos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
