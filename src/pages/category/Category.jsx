import "./Category.css";
import { useVideo } from "../../VideoContext";
import { SideMenu } from "../../common/sideMenu/SideMenu";
import { useNavigate } from "react-router-dom";
import { ACTION_TYPE } from "../../utils/constant";
export const Category = () => {
  const { state, dispatch } = useVideo();
  const navigate = useNavigate();

  const categoryHandler = (category) => {
    navigate("/listing");
    dispatch({ type: ACTION_TYPE.CURRENTCATEGORY, payload: category });
  };
  return (
    <div className="category_main">
      <h2 className="category_heading">Category</h2>
      <div className="categoryContainer">
        <SideMenu />
        <div className="categories">
          {state?.categories?.map((category) => {
            return (
              <div
                key={category?._id}
                onClick={() => categoryHandler(category)}
              >
                <img src={category?.thumbnail} alt="category" />
                <h4>{category?.category}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
