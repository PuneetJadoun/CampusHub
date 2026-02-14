import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register, verifyOtp } from '../api/auth';

const COLLEGE_EMAIL_SUFFIX = '@bennett.edu.in';

function SignupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState('form'); // 'form' | 'otp'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //register form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //OTP
  const [otp, setOtp] = useState('');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setError('');      // Clear any previous errors

    // Validate inputs
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    // basic client-side validation to ensure only college emails are used for registration
    if (!email.trim().toLowerCase().endsWith(COLLEGE_EMAIL_SUFFIX)) {
      setError('Only college email (@bennett.edu.in) is allowed.');
      return;
    }
     
    // Validate password length and match
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    // Call the register API
    setLoading(true);
    const { ok, data } = await register(name.trim(), email.trim().toLowerCase(), password);
    setLoading(false);  // Reset loading state after API call
     

    // Handle the response from the API
    if (ok) {
      setStep('otp');
      setError('');
    } else {
      setError(data?.message || 'Registration failed.');
    }
  };
  
  // Handle OTP submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!otp.trim()) {
      setError('Enter the 6-digit OTP.');
      return;
    }

    setLoading(true);
    const { ok, data } = await verifyOtp(email.trim().toLowerCase(), otp.trim());
    setLoading(false);

    if (ok) {
      navigate('/login', { state: { message: 'Email verified. You can sign in now.' } });
    } else {
      setError(data?.message || 'Verification failed.');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          {step === 'form' ? (
            <>
              <h1 className="text-3xl font-bold mb-2">Create your account</h1>
              <p className="text-gray-600 mb-6">Sign up with your college email. We’ll send an OTP to verify.</p>

              {error && (
                <div className="mb-4 p-3 rounded bg-red-50 text-red-700 text-sm">{error}</div>
              )}

              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border p-3 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                  />
                </div>

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
                    placeholder="Create password (min 6 characters)"
                    className="w-full border p-3 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Confirm password</label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full border p-3 rounded"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Sending OTP…' : 'Create account →'}
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2">Verify your email</h1>
              <p className="text-gray-600 mb-6">
                We sent a 6-digit code to <strong>{email}</strong>. Enter it below.
              </p>

              {error && (
                <div className="mb-4 p-3 rounded bg-red-50 text-red-700 text-sm">{error}</div>
              )}

              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">OTP</label>
                  <input
                    type="text"
                    placeholder="000000"
                    className="w-full border p-3 rounded text-center text-lg tracking-widest"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    maxLength={6}
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Verifying…' : 'Verify & continue'}
                </button>
              </form>

              <button
                type="button"
                className="w-full mt-2 text-sm text-gray-600 underline"
                onClick={() => setStep('form')}
                disabled={loading}
              >
                ← Back to signup
              </button>
            </>
          )}

          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="underline">
              Login
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

export default SignupPage;
