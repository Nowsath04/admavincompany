import "./TopNavbar.css";

export function TopNavbar() {
  return (
    <div className="topNavContainer align-content-lg-start">
      <li className="nav-item dropdown" style={{ listStyleType: "none" }}>
        <a
          className="nav-link dropdown-toggle"
          href="!#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ fontSize: "20px" }}
        >
          PROJECTS
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="/">
              1. InfintyScroll
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/square">
              2. SquareSplit
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
}
