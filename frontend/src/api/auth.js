const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";  // backend url to hit


// register function to hit the backend
export async function register(name, email, password) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}


// verify otp function to hit the backend
export async function verifyOtp(email, otp) {
  const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp: String(otp).trim() }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}


// login function to hit the backend
export async function login(email, password) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}


