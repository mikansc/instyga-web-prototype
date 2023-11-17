import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
      <div className="container">
        <Link className="navbar-brand h6" href="/">
          Inst<span className="text-primary">y</span>ga
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
