import React from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="bg-white-800 min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Banner */}
          <div className="h-40 bg-gradient-to-r from-blue-500 to--600 relative">
            <div className="absolute -bottom-16 left-8">
              <img
                src="/default-profile.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">@johndoe</p>
            <p className="mt-4 text-gray-700">
              This is where the user bio or description will go. You can put
              details about the person here.
            </p>

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
