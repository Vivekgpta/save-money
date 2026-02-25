// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";

// function Profile({ user, setUser }) {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       navigate("/");
//     } catch (error) {
//       alert("Logout failed");
//     }
//   };

//   if (!user) {
//     return <h2>Please login first</h2>;
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Profile</h2>

//       {user.photo && (
//         <img
//           src={user.photo}
//           alt="Profile"
//           style={{ width: "100px", borderRadius: "50%" }}
//         />
//       )}

//       <h3>{user.name}</h3>
//       {user.email && <p>{user.email}</p>}
//       {user.phone && <p>{user.phone}</p>}

//       <button
//         onClick={handleLogout}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           background: "red",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Profile;








import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Profile({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      alert("Logout failed");
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-700">
          Please login first
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center transition-transform duration-300 hover:scale-105">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Profile
        </h2>

        {user.photo && (
          <img
            src={user.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400 shadow-md object-cover"
          />
        )}

        <h3 className="text-xl font-semibold text-gray-700">
          {user.name}
        </h3>

        {user.email && (
          <p className="text-gray-500 mt-2">
            📧 {user.email}
          </p>
        )}

        {user.phone && (
          <p className="text-gray-500">
            📱 {user.phone}
          </p>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;