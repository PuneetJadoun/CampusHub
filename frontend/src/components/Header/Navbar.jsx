import { Link } from "react-router-dom";
import Logo from "./Logo";
import { navlinks } from "../../data/navlinks";
import AuthLinkButton from "./AuthLinkButton";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border mt-6 mx-16">
      <Logo />

      <div className="flex gap-6">
        {navlinks.map((link) => (
          <Link key={link.name} to={link.href} className="text-sm font-medium">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-3">
        <AuthLinkButton label="Login" to="/login" />
        <AuthLinkButton label="Signup" to="/signup" />
      </div>
    </nav>
  );
}

export default Navbar;
