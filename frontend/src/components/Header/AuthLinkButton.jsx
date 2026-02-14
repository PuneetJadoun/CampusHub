import { Link } from 'react-router-dom';

function AuthLinkButton({ label, to }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-50 inline-block"
    >
      {label}
    </Link>
  );
}

export default AuthLinkButton;
