import "./ExplorePage.css";
import { SideMenu } from "../../common/sideMenu/SideMenu";
import { useVideo } from "../../VideoContext";
import { VideoContainer } from "../../common/videoContainer/VideoContainer";
import { ACTION_TYPE } from "../../utils/constant";
export const ExplorePage = () => {
  const { state, dispatch } = useVideo();

  const searchHandler = (e) => {
    dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value });
  };

  const exploreData =
    state.searchTerm === ""
      ? state.explore
      : state.explore.filter((item) =>
          item.title.toUpperCase().includes(state.searchTerm?.toUpperCase())
        );
  return (
    <div className="category_main">
      <h2 className="category_heading">Explore</h2>
      <input
        type="search"
        name="explore"
        className="explore_search"
        placeholder="Search Video by title"
        onChange={searchHandler}
      />
      <div className="categoryContainer">
        <SideMenu />
        <div className="categories">
          {exploreData?.map((item) => {
            return (
              <div key={item?._id}>
                <VideoContainer videoDetails={item} />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
