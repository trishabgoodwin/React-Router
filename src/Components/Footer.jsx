import { Routes, Route, Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="footer">
          <Link to="/">Home  </Link>
          <Link to="/blue">Blue  </Link>
          <Link to="/red">Red  </Link>
          <Link to="/green">Green  </Link>
          <Link to="/purple">Purple  </Link>
      </footer>
    );
  }
  
  export default Footer;