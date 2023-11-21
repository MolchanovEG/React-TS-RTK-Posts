import { FC, useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer: FC = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isFetching } = postAPI.useFetchAllPostsQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <div>
      <div className="post__list">
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
