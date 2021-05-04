import logo from "./img/Logo.svg";
import "./App.css";

export const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <nav className="nav">
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
      <div className="content">
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
    </div>
  );
};
