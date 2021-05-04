import logo from "../img/Logo.svg";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};
