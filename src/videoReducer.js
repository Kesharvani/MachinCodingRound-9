import { ACTION_TYPE } from "./utils/constant";

export const initialValue = {
  videos: [],
  explore: [],
  categories: [],
  selectedTab: "home",
  selectedCategory: {},
  watchLater: [],
  searchTerm: "",
  playList: [
    {
      _id: 19,
      title: "Origami Swan - Simple and Elegant",
      views: 2879,
      chips: ["origami", "swan", "paper", "elegant"],
      thumbnail: "https://picsum.photos/300/174",
      src: "https://www.youtube.com/embed/GBIIQ0kP15E",
      category: "Origami",
      creator: "PaperCraftPro"
    }
  ]
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        videos: action.payload.videos,
        categories: action.payload.categories,
        explore: action.payload.videos
      };
    case ACTION_TYPE.SELECTEDTAB:
      return {
        ...state,
        selectedTab: action.payload
      };
    case ACTION_TYPE.CURRENTCATEGORY:
      return {
        ...state,
        selectedCategory: { ...action.payload }
      };
    case ACTION_TYPE.ADDWATCHLATER:
      return {
        ...state,
        watchLater: [...state.watchLater, action.payload]
      };
    case ACTION_TYPE.REMOVEWATCHLATER:
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (item) => item?._id !== action.payload?._id
        )
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      };
    case ACTION_TYPE.REMOVEFROMPLAYLIST:
      return {
        ...state,
        playList: state.playList.filter(
          (item) => item?._id !== action.payload?._id
        )
      };
    default:
      console.error("Error in reducer::");
  }
};
