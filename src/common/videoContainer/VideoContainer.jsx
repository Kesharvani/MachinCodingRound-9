import "./VideoContainer.css";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../VideoContext";
import { ACTION_TYPE } from "../../utils/constant";
import { isInWatchLater } from "../../utils/common";
export const VideoContainer = ({ videoDetails }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useVideo();
  const onClickVideoHandler = (id) => {
    navigate(`/listing/${id}`);
  };
  const watchLaterHandler = (videoDetails) => {
    if (state?.watchLater?.find((item) => item?._id === videoDetails?._id)) {
      dispatch({ type: ACTION_TYPE.REMOVEWATCHLATER, payload: videoDetails });
    } else {
      dispatch({ type: ACTION_TYPE?.ADDWATCHLATER, payload: videoDetails });
    }
  };
  return (
    <div className="video_container_main">
      <div className="image_container_listing">
        <img
          src={videoDetails?.thumbnail}
          alt="video"
          onClick={() => onClickVideoHandler(videoDetails?._id)}
        />
        {isInWatchLater(state?.watchLater, videoDetails) ? (
          <MdWatchLater
            className="watch_later"
            size={22}
            onClick={() => watchLaterHandler(videoDetails)}
          />
        ) : (
          <MdOutlineWatchLater
            className="watch_later"
            size={22}
            onClick={() => watchLaterHandler(videoDetails)}
          />
        )}
      </div>
      <h4>{videoDetails.title}</h4>
      <h4>{videoDetails.category}</h4>
      <span>{videoDetails.views}</span>|<span>{videoDetails.creator}</span>
    </div>
  );
};
