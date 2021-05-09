import { MyPosts } from "./MyPosts";
import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="alt"
        />
      </div>
      <div>ava + descr</div>
      <MyPosts/>
    </div>
  );
};
