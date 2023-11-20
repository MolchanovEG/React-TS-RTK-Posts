import { FC } from "react";
import { IPost } from "../models/Post";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      PostId: {post.id}. <br />
      PostTitle: {post.title}
      <button>Подробнее</button>
    </div>
  );
};

export default PostItem;
