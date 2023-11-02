import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Instyga
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link active" href="/account/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
