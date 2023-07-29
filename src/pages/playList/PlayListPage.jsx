import "./PlayListPage.css";
import { SideMenu } from "../../common/sideMenu/SideMenu";
import { useVideo } from "../../VideoContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ACTION_TYPE } from "../../utils/constant";
import Modal from "react-modal";
import { useState } from "react";
export const PlayList = () => {
  const { state, dispatch } = useVideo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const removeFromPlaylist = (item) => {
    dispatch({ type: ACTION_TYPE.REMOVEFROMPLAYLIST, payload: item });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const playlistbtnHandler = () => {
    handleCloseModal();
  };
  return (
    <div className="category_main">
      <h2 className="category_heading">Playlist</h2>
      <div className="categoryContainer">
        <SideMenu />
        <div className="categories">
          {state?.playList?.map((item) => {
            return (
              <div key={item?._id}>
                <div className="image_container_listing">
                  <img src={item?.thumbnail} alt="" />
                  <AiOutlineCloseCircle
                    size={22}
                    className="watch_later"
                    onClick={() => removeFromPlaylist(item)}
                  />
                </div>
                <h4>{item?.title}</h4>
                <span>{item.creator}</span>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "4.5rem" }}>
          <AiOutlineFolderAdd size={32} onClick={handleOpenModal} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <div className="">
          <h2>Add To Playlist</h2>
          <p>New Playlist</p>
          <input type="search" placeholder="New Playlist" />
          <AiOutlineClose
            onClick={handleCloseModal}
            className="watch_later"
            size={24}
          />
          <button className="btn" onClick={playlistbtnHandler}>
            Create New Playlist
          </button>
        </div>
      </Modal>
    </div>
  );
};
