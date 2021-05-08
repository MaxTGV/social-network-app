import style from "./Post.module.css";

export const Post = ({ message }) => {
  return (
    <div className={style.post}>
      <img
        src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg"
        alt="ava"
      />
      {message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
