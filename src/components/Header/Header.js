import "./Header.css";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };
  return (
    <div className="header">
    <span onClick={() => window.scroll(0, 0)} >
      🎬 Entertainment Hub 🎥
    </span>
     { localStorage.getItem("currentUser") && <span  onClick={logout} >Logout</span>}
    </div>
  );
};

export default Header;
