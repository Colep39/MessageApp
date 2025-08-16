import React, {useEffect, useState} from "react";
import Navbar from "../components/NavBar.jsx";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');



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

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try{
      const res = await fetch('http://localhost:4000/api/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',

        },
        credentials: 'include',
        body: JSON.stringify( {currentPassword, newPassword })
      })
      const data = await res.json();
      setError(data.message || 'Password changed successfully');
      if (res.ok){
        setShowPasswordModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    }
    catch(error){
      console.error(error);
      setError('An error occurred while changing password');
    }

  }
  const handleEditProfile = async () => {
    setEditProfileModal(false);
  }
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
              <button onClick={() => setEditProfileModal(true)}className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer">
                Edit Profile
              </button>
              <button onClick={() => setShowPasswordModal(true)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Change Password Modal */}
      {showPasswordModal && (
         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 text-black">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Change Password</h2>

            {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

            <input
              type="password"
              placeholder="Old Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full mb-3 border px-3 py-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mb-3 border px-3 py-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-4 border px-3 py-2 rounded-lg"
            />

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
                onClick={() => setShowPasswordModal(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer"
                onClick={handleChangePassword}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Profile Modal */}
      {editProfileModal && (
         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 text-black">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>

            {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

            <input
              type="password"
              placeholder="Old Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full mb-3 border px-3 py-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mb-3 border px-3 py-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-4 border px-3 py-2 rounded-lg"
            />

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
                onClick={() => setEditProfileModal(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer"
                onClick={handleEditProfile}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
