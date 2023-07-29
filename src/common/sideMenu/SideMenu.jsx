import "./SideMenu.css";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../VideoContext";
import { ACTION_TYPE } from "../../utils/constant";
export const SideMenu = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useVideo();

  const Home = () => {
    dispatch({ type: ACTION_TYPE.SELECTEDTAB, paload: "home" });
    navigate("/");
  };

  const Explore = () => {
    dispatch({ type: ACTION_TYPE.SELECTEDTAB, paload: "explore" });
    navigate("/explore");
  };

  const Playlist = () => {
    dispatch({ type: ACTION_TYPE.SELECTEDTAB, paload: "playlist" });
    navigate("/playlist");
  };

  const WatchLater = () => {
    dispatch({ type: ACTION_TYPE.SELECTEDTAB, paload: "watchlater" });
    navigate("/watch");
  };
  return (
    <div className="sidebar_container">
      <div
        className={
          state?.selectedTab === "home" ? "item item_selected" : "item"
        }
        onClick={Home}
      >
        <AiFillHome size={24} />
        <h3>Home</h3>
      </div>
      <div
        className={
          state?.selectedTab === "explore" ? "item item_selected" : "item"
        }
        onClick={Explore}
      >
        <MdExplore size={24} />
        <h3>Explore</h3>
      </div>
      <div
        className={
          state?.selectedTab === "playlist" ? "item item_selected" : "item"
        }
        onClick={Playlist}
      >
        <TbPlaylistAdd size={24} />
        <h3>Playlist</h3>
      </div>
      <div
        className={
          state?.selectedTab === "watchlater" ? "item item_selected" : "item"
        }
        onClick={WatchLater}
      >
        <MdWatchLater size={24} />
        <h3>Watch Later</h3>
      </div>
    </div>
  );
};
