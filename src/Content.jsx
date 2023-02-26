import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setposts] = useState([]);
  const [isPostshowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState[{}];

  const handleIndexposts = () => {
    console.log("handleIndexposts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setposts(response.data);
    });
  };

  const handleShowPost = (post) => {
    console.log("handleShowPost, post");
    setIsPostsShowVisible(true);
    setCurrentPost(posts);
  };

  const handleClose = () => {
    console.log(handleClose);
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexposts, []);

  return (
    <div>
      <h1> Welcome to React!</h1>
      <PostsIndex posts={posts} onShowPosts={handleShowPost} />
      <Modal show={isPostshowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
