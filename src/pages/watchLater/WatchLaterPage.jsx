import { SideMenu } from "../../common/sideMenu/SideMenu";
import { useVideo } from "../../VideoContext";
import { VideoContainer } from "../../common/videoContainer/VideoContainer";
export const WatchLaterPage = () => {
  const { state } = useVideo();
  return (
    <div className="category_main">
      <h2 className="category_heading">Watch Later</h2>
      <div className="categoryContainer">
        <SideMenu />
        <div className="categories">
          {state.watchLater.length === 0 ? (
            <b className="watchlater_fallback">Watch Later is Empty:</b>
          ) : (
            <>
              {state.watchLater?.map((item) => {
                return (
                  <div key={item?._id}>
                    <VideoContainer videoDetails={item} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
