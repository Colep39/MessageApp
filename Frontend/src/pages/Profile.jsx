import React, {useEffect, useState} from "react";
import Navbar from "../components/NavBar.jsx";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/me', {
      credentials: 'include', // important so cookies/session are sent
    })
      .then(res => {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);


  if (!user) return <><Navbar /><div className="flex items-center justify-center min-h-screen text-xl font-semibold text-white-700">Loading...</div>;</>

  return (
    <>
      <Navbar />
      <div className="bg-blue-100 min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
         {/* Banner */}
          <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600 relative">
            <div className="absolute -bottom-16 left-8">
              <img
                src={user.pfp || "/message-app-pfp.jpg"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {user.firstname} {user.lastname}
            </h2>
            <p className="text-blue-600">{user.username}</p>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer">
                Edit Profile
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
