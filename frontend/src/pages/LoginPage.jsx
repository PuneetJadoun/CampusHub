import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../api/auth';

const COLLEGE_EMAIL_SUFFIX = '@bennett.edu.in';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const successMessage = location.state?.message;  // Show success message if redirected from signup page after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form from refreshing the page
    setError('');  // Clear previous errors

    // Basic client-side validation
    if (!email.trim() || !password) {
      setError('Email and password are required.');
      return;
    }

    // basic client-side validation to ensure only college emails are used for login
    if (!email.trim().toLowerCase().endsWith(COLLEGE_EMAIL_SUFFIX)) {
      setError('Only college email (@bennett.edu.in) can sign in.');
      return;
    }
    
    // Calling the login API 
    setLoading(true);  // Make the button show loading state
    const { ok, data } = await login(email.trim().toLowerCase(), password);
    setLoading(false); // Reset loading state after API call

    // Handle the response from the API
    if (ok) {
      if (data?.token) {
        localStorage.setItem('token', data.token);
        if (data?.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
      }
      navigate('/', { replace: true });
    } else {
      setError(data?.message || 'Login failed.');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-gray-600 mb-6">Sign in with your college email.</p>
          
          // Show success message if redirected from signup page after successful registration
          {successMessage && (
            <div className="mb-4 p-3 rounded bg-green-50 text-green-800 text-sm">{successMessage}</div>
          )}
           
          // Show error message if login fails
          {error && (
            <div className="mb-4 p-3 rounded bg-red-50 text-red-700 text-sm">{error}</div>
          )}
          
          // Login form
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">College email</label>
              <input
                type="email"
                placeholder={`you${COLLEGE_EMAIL_SUFFIX}`}
                className="w-full border p-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <p className="text-xs text-gray-500 mt-1">Only @bennett.edu.in addresses allowed.</p>
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border p-3 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign in →'}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-gray-900 text-white px-10">
        <div className="max-w-lg">
          <div className="text-6xl mb-4">❞</div>
          <p className="text-2xl font-light leading-relaxed mb-6">
            "Sell what you don’t need, rent what <br />
            you do — all safely within your campus community.”
          </p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-semibold">Puneet Kumar Singh</p>
              <p className="text-sm text-gray-400">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
