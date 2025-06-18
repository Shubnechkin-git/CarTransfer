// src/context/ApiContext.tsx
import axios from "axios";
import { createContext, useContext } from "react";

const ApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  api.interceptors.response.use(
    (res) => res,
    (err) => {
      console.error("API error:", err?.response?.data || err.message);
      return Promise.reject(err);
    }
  );

  const getCars = async () => {
    const response = await api.get("/cars");
    console.log(response);

    return response.data;
  };

  const getCarById = async (id) => {
    const response = await api.get(`/cars/${id}`);
    return response.data;
  };

  const getStaff = async (id) => {
    const response = await api.get(`/staff`);
    return response.data;
  };

  const createFeedback = async (data) => {
    const response = await api.post("/feedback", data);
    return response.data;
  };

  return (
    <ApiContext.Provider
      value={{ api, getCars, getCarById, getStaff, createFeedback }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
