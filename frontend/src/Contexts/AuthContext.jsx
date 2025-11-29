import React, { createContext } from "react";

const AuthContext = createContext({
  LoginWindow: false,
  setLoginWindow: () => {},
  LogoutWindow: false,
  setLogoutWindow: () => {},
  RegisterWindow: false,
  setRegisterWindow: () => {},
  ProfileWindow: false,
  setProfileWindow: () => {},
  UserInfo: {},
  setUserInfo: () => {},
  Flights: [],
  setFlights: () => {},
  Weather: [],
  setWeather: () => {},
  // Add other context values here
});

export default AuthContext;
