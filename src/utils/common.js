export const isInWatchLater = (watchLatervideos, singleVideo) => {
  if (watchLatervideos.find((item) => item?._id === singleVideo?._id)) {
    return true;
  } else {
    return false;
  }
};
