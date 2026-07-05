import { useEffect, useState } from "react";
import { getProfile } from "../services/authservice";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await getProfile(token);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Profile Page</h1>

        {user ? (
          <>
            <h2>Welcome, {user.name}! 👋</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;