import Logo from "../../assets/images/Logo.png";
import FooterBg from "../../assets/images/Footer.png";

function Footer() {
  return (
    <div
      className="border-2 mt-10 mb-2 min-h-[300px] bg-center bg-no-repeat bg-contain bg-white/70 bg-blend-overlay py-10"
      style={{
      backgroundImage: `url(${FooterBg})`,
      backgroundSize: "50%",
      backgroundRepeat: "repeat",
      }}
    >


      <div className="bg-amber flex justify-between px-8 py-2">

        {/* LEFT: Logo + tagline */}
        <div className="mb-6">
          <img src={Logo} alt="Logo" className="w-28 mb-2" />
          <p className="text-sm">buy, sell and rent for students.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <h3 className="font-semibold">Quick Links</h3>
          <p>Home</p>
          <p>Features</p>
          <p>Working</p>
          <p>FAQs</p>
        </div>

        {/* Policies */}
        <div className="mb-6">
          <h3 className="font-semibold">Policies</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Safety Tips</p>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h3 className="font-semibold">Contact</h3>
          <p>support@campushub.com</p>
          <p>GitHub: CampusHub</p>
        </div>

      </div>

      <p className="text-sm px-8 mt-10 ">
          © {new Date().getFullYear()} CampusHub
      </p>
    </div>  
  );
}

export default Footer;
 