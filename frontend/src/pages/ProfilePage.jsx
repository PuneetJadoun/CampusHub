import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  // fetch logged user when page loads
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
    } catch (err) {
      console.log("Error fetching user:", err);
    }
  };

  // update profile
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/users/update",
        { name: user.name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Profile updated");

      // refetch user after update
      fetchUser();

    } catch (err) {
      console.log("Update error:", err);
    }
  };

  if (!user) return <h2>Loading...</h2>;

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