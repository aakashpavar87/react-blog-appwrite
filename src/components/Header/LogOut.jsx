import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogOut({ className }) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.log("Error from Logout Button :: ", error);
    }
  };
  return (
    <button className={className} onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default LogOut;
