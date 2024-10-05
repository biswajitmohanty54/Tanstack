import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Navbar
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link active">
              Home
            </NavLink>
            <NavLink to="/trad" className="nav-link">
              FetchOld
            </NavLink>
            <NavLink to="/rq" className="nav-link">
              FetchRQ
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
