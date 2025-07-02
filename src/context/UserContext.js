import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../components/services/AxiosInstance";


const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [id, userId] = useState(null);
  const [usertoken, setUserToken] = useState("");
  const [data, setData] = useState();
  const [metaData, setmetaData] = useState();
  const [loading, setLoading] = useState(true); // 👈 Loading state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (usertoken) return;
    if (token) {
      setUserToken(token);
    }
  }, [usertoken]);

  const fetchUser = async () => {
    setLoading(true); // 👈 Start loading
    try {
      const response = await axiosInstance.get("/v1/auth/profile");
      console.log("response in context is: ", response);
      setData(response?.data?.user);
      userId(response?.data?.user?._id);
      setUser(response?.data?.user);
      setmetaData(response?.data?.userMeta);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false); // 👈 Done loading
    }
  };

  const fetchUserfree = async () => {
    try {
      const response = await axiosInstance.get("/v1/auth/profile");
      setData(response?.data?.user);
      userId(response?.data?.user?._id);
      setUser(response?.data?.user);
      setmetaData(response?.data?.userMeta);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [usertoken]);

  return (
    <UserContext.Provider
      value={{ user, setUserToken, id, data, fetchUser,fetchUserfree, metaData, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
