{/* 
   AuthButton Component going to Navbar component 
*/}

function AuthButton({ label }) {
  return (
    <button 
      type="button"
      className="px-4 py-2 border rounded-md text-sm font-medium"
    >
      {label}
    </button>
  );
}

export default AuthButton;
