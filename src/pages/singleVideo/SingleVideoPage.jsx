import { useParams } from "react-router-dom";
import { useVideo } from "../../VideoContext";
import { SideMenu } from "../../common/sideMenu/SideMenu";
import "./SingleVideoPage.css";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { TbPlaylistAdd, TbPlaylistX } from "react-icons/tb";
import { isInWatchLater } from "../../utils/common";
import { ACTION_TYPE } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
export const SingleVideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useVideo();
  const singleVideoItem = state.videos?.find(
    (item) => item?._id === Number(id)
  );
  const watchLaterHandler = (videoDetails) => {
    if (state?.watchLater?.find((item) => item?._id === videoDetails?._id)) {
      dispatch({ type: ACTION_TYPE.REMOVEWATCHLATER, payload: videoDetails });
    } else {
      dispatch({ type: ACTION_TYPE?.ADDWATCHLATER, payload: videoDetails });
    }
  };
  return (
    <div className="singleContainer">
      <div className="side_menu_single">
        <SideMenu />
      </div>
      <div className="categories_iframe">
        <iframe
          width="500px"
          height="350px"
          src={singleVideoItem?.src}
          title={singleVideoItem?._id}
        ></iframe>
        <div className="row_align">
          <h4>{singleVideoItem?.title}</h4>
          <div className="icons">
            {isInWatchLater(state?.watchLater, singleVideoItem) ? (
              <MdWatchLater
                size={22}
                onClick={() => watchLaterHandler(singleVideoItem)}
              />
            ) : (
              <MdOutlineWatchLater
                size={22}
                onClick={() => watchLaterHandler(singleVideoItem)}
              />
            )}
            <TbPlaylistAdd size={22} />
            <TbPlaylistX size={22} />
          </div>
        </div>
      </div>
      <div className="more_videos">
        <h3>More Videos:</h3>
        {state.videos?.map((item) => {
          return (
            <div
              key={item?._id}
              className="more_video_container"
              onClick={() => navigate(`/listing/${item?._id}`)}
            >
              <img
                src={item.thumbnail}
                alt="moreVide_image"
                height="130px"
                width="220"
              />
              <div>
                <h4>{item.title}</h4>
                <span>{item?.creator}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
