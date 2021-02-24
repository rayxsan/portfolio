import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

interface ContextProps {
  currentUser: firebase.default.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
}
export const AuthContext = React.createContext<Partial<ContextProps>>({});

// export function useAuth() {
//   return useContext(AuthContext);
// }

interface Props {}

export const AuthProvider: React.FC<Props> = (props) => {
  const [user, setUser] = useState(null as firebase.default.User | null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
      setLoadingAuthState(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    authenticated: user !== null,
    setUser,
    loadingAuthState,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loadingAuthState && props.children}
    </AuthContext.Provider>
  );
};
