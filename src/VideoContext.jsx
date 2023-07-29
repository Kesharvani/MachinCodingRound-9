import { createContext, useContext, useReducer, useEffect } from "react";
import { videoReducer, initialValue } from "./videoReducer";
import { ACTION_TYPE } from "./utils/constant";
import { videos } from "./db/videoData";
import { categories } from "./db/category";
export const VideoContext = createContext();
export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialValue);

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: ACTION_TYPE.SUCCESS, payload: { videos, categories } });
    };
    getData();
  }, []);
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
export const useVideo = () => useContext(VideoContext);
