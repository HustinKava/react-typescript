import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="navbarMainStyling"
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/homepage"
                  className={
                    window.location.pathname === "/homepage"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Homepage
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/typingprops"
                  className={
                    window.location.pathname === "/typingprops"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Typing Props
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/advancedprops"
                  className={
                    window.location.pathname === "/advancedprops"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Advanced Props
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/eventprops"
                  className={
                    window.location.pathname === "/eventprops"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Event Props
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/styleprops"
                  className={
                    window.location.pathname === "/styleprops"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Style Props
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/exportedprops"
                  className={
                    window.location.pathname === "/exportedprops"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Exported Props
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
