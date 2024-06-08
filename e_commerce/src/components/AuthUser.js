import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const isAuth = () => {
  const res = JSON.parse(sessionStorage.getItem("token")) || null;
  if (res == null) return false;
  return true;
};
export default function AuthUser() {
  const auth = isAuth();
  useEffect(() => {
    if (!auth) {
      toast.error("session expired");
    }
  }, [auth]);
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
