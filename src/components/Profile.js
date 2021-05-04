import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="alt"
        />
      </div>
      <div>ava + descr</div>
      <div>
        My posts
        <div>New Posts</div>
      </div>
      <div>
        <div>Post1</div>
        <div>Post2</div>
      </div>
    </div>
  );
};
