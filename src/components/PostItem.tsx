import { FC } from "react";
import { IPost } from "../models/Post";

interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  return (
    <div className="container__postItem">
      <div>№ {post.id}</div>
      <div className="postitem__title">Title: {post.title}</div>
      <div className="postitem__body">
        Body:{" "}
        {post.body.length > 15 ? post.body.substring(0, 15) + "..." : post.body}
      </div>
    </div>
  );
};

export default PostItem;
