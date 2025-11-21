import Logo from "./Logo";
import { navlinks } from "../../data/navlinks";
import AuthButton from "./AuthButtons";

console.log("NAVBAR RENDERED");

function Navbar() {

    {/* const navlinks = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "features" },
        { name: "Working", href: "#working" },
        { name: "FAQ'S", href: "#faq" },
    ];
    */}

  return (
    <nav className="flex items-center justify-between px-6 py-4 border border-gray-300 mt-6 ml-16 mr-16">

      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>
      

      {/* Navlinks */}
      <div className="flex gap-6">
        {navlinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* AuthButtons */}
      <div className="flex gap-3">
        <AuthButton label="Login" />
        <AuthButton label="Signup" />
      </div>
      
    </nav>
  )
}

export default Navbar;
