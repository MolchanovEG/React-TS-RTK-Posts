import { FC } from "react";
import { IPost } from "../models/Post";
import { useAppSelector } from "../hooks/redux";
import { Link } from "react-router-dom";
import "./Post.css";

const Post: FC = () => {
  const post: IPost = useAppSelector((state) => state.postReducer);

  return (
    <div className="container__postItem">
      <div className="postitem__ID">№ {post.id}</div>
      <div className="postitem__userID">userId: {post.userId}</div>
      <div className="postitem__title">
        <h1>{post.title}</h1>
      </div>
      <div className="postitem__body">{post.body}</div>
      <div className="to_less">
        <Link to="/">
          <button>Назад</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
