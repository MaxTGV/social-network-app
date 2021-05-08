import { Post } from "./Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hello, it's me" />
        <Post message="Hi, how are you?" />
      </div>
    </div>
  );
};
