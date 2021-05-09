import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Profile />
      </div>

      {/*   <Profile />  */}
    </div>
  );
};
