import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext({
  currentUser: null,
});

export function useAuth() {
  return useContext(AuthContext);
}

interface Props {}

export const AuthProvider: React.FC<Props> = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => setCurrentUser(user));
  }, []);

  const value = {
    currentUser,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
