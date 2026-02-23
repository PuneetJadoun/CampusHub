import { useEffect, useState } from "react";
import { getMe, updateProfile } from "../api/user";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetchUser();
  }, []);

  const fetchUser = async () => {
    const { ok, data } = await getMe();
    setLoading(false);
    if
      (ok){ setUser(data) 
    }
    else{
      // user doesn't exist or token is invalid
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  };

  const handleUpdate = async () => {
    if (!user.name.trim()) {
      alert("Name cannot be empty");
      return;
    }

    const { ok } = await updateProfile(user.name);

    if (ok) {
      alert("Profile updated");
      fetchUser();
    }
  };

  
  if(loading)return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>

      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />
      </div>

      <br />

      <div>
        <label>Email:</label>
        <p>{user.email}</p>
      </div>

      <button onClick={handleUpdate}>
        Save
      </button>
    </div>
  );
}

export default Profile;