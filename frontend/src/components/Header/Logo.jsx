import logo from '../../assets/images/Logo.png';

{
  /* 
   Logo Component going to Navbar component 
*/
}

function Logo() {
  return (
    <>
      <img src={logo} alt="Logo" className="w-40 h-40" />
    </>
  );
}

export default Logo;
