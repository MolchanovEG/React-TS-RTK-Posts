import { FC } from "react";
import { IPost } from "../models/Post";
import { Link } from "react-router-dom";
import { postState } from "../services/PostSlice";
import { useAppDispatch } from "../hooks/redux";

interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  const { put } = postState.actions;
  const dispatch = useAppDispatch();

  const goPost = () => {
    dispatch(put(post));
  };

  return (
    <div className="container__postItem">
      <div>№ {post.id}</div>
      <div className="postitem__title">
        <h1>
          {post.title.length > 10
            ? post.title.substring(0, 10) + "..."
            : post.title}
        </h1>
      </div>
      <div className="postitem__body">
        {post.body.length > 15 ? post.body.substring(0, 15) + "..." : post.body}
      </div>

      <div className="to_more">
        <Link to="/post">
          <button onClick={goPost}>Просмотр</button>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
