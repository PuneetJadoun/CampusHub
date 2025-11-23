function Login() {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE - Login Form */}

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">

          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-gray-600 mb-6">
            Sign in to continue.
          </p>

          {/* GOOGLE LOGIN BUTTON */}

          <button className="w-full border py-3 rounded mb-6">
            Continue with Google
          </button>

          {/* OR DIVIDER */}

          <div className="flex items-center mb-6">
            <div className="grow h-px bg-gray-300"></div>
            <span className="mx-3 text-gray-500">or</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          {/* EMAIL INPUT */}

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full border p-3 rounded"
            />
          </div>

          {/* PASSWORD INPUT */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full border p-3 rounded"
            />
          </div>

          {/* LOGIN BUTTON */}
          <button className="w-full bg-black text-white py-3 rounded">
            Continue with Email →
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account? <a href="/signup" className="underline">Sign up</a>
          </p>

        </div>
      </div>

      {/* RIGHT SIDE - Quote*/}

      <div className="w-1/2 flex items-center justify-center bg-gray-900 text-white px-10">
        <div className="max-w-lg">

          <div className="text-6xl mb-4">❞</div>

          <p className="text-2xl font-light leading-relaxed mb-6">
           "Sell what you don’t need, rent what <br />
           you do — all safely within your campus community.”
          </p>

          <div className="flex items-center gap-3">
            <img 
              src="https://via.placeholder.com/50" 
              alt="User" 
              className="rounded-full"
            />
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


export default Login;