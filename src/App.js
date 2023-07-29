import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Category } from "./pages/category/Category";
import { VideoListingPage } from "./pages/listing/VideoListingPage";
import { SingleVideoPage } from "./pages/singleVideo/SingleVideoPage";
import { WatchLaterPage } from "./pages/watchLater/WatchLaterPage";
import { ExplorePage } from "./pages/explore/ExplorePage";
import { PlayList } from "./pages/playList/PlayListPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/listing" element={<VideoListingPage />} />
      <Route path="/listing/:id" element={<SingleVideoPage />} />
      <Route path="/watch" element={<WatchLaterPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/playlist" element={<PlayList />} />
    </Routes>
  );
}
