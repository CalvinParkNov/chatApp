import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">This is Logo</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input className="searchInput" placeholder="Search" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarBadge">10</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
