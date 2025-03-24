import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import Darkmode from "../Darkmode/Darkmode";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkmodeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.style.backgroundColor = "#2c3e50";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#484b6a";
      document.body.style.color = "#000000";
    }
  };

  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <h3 className="content-top-title">Home</h3>
        </div>
        <div className="content-top-btns">
            <Darkmode onClick ={handleDarkmodeToggle} />
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
            <button className="notification-btn content-top-btn">
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop