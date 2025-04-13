import { Routes, Route, Link } from "react-router-dom";

function Nav() {
    return (
      <footer id="navbar">
          <Link to="/">Home  </Link>
          <Link to="/blue">Blue  </Link>
          <Link to="/red">Red  </Link>
          <Link to="/green">Green  </Link>
          <Link to="/purple">Purple  </Link>
      </footer>
    );
  }
  
  export default Nav;