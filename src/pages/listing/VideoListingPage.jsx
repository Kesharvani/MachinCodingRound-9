import { useVideo } from "../../VideoContext";
import { SideMenu } from "../../common/sideMenu/SideMenu";
import { VideoContainer } from "../../common/videoContainer/VideoContainer";
export const VideoListingPage = () => {
  const { state } = useVideo();
  const OneCategoryVideoData = state?.videos?.filter(
    (video) => video?.category === state.selectedCategory.category
  );
  return (
    <div className="category_main">
      <h2 className="category_heading">{state?.selectedCategory?.category}</h2>
      <div className="categoryContainer">
        <SideMenu />
        <div className="categories">
          {OneCategoryVideoData?.map((item) => {
            return <VideoContainer videoDetails={item} key={item._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
