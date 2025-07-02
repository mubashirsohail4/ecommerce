import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              </ul>
            </div>

            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary"
                >
                  ECOMMERCE
                </span>
              </div>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-4">
            <ThemeSelector />

            <div className="indicator">
              <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                <ShoppingBagIcon className="size-5" />
                <span className="badge badge-sm badge-primary indicator-item">
                  {0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
