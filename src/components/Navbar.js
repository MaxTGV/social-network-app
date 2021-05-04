import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <a href="#r">Profile</a>
      </div>
      <div>
        <a href="#r">Messages</a>
      </div>
      <div>
        <a href="#r">News</a>
      </div>
      <div>
        <a href="#r">Music</a>
      </div>
      <div>
        <a href="#r">Settings</a>
      </div>
    </nav>
  );
};
