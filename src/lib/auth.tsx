import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const KEY = "oriensup_auth";

type AuthCtx = {
  isAuth: boolean;
  ready: boolean;
  login: () => void;
  logout: () => void;
};

const Ctx = createContext<AuthCtx>({ isAuth: false, ready: false, login: () => {}, logout: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setIsAuth(localStorage.getItem(KEY) === "1");
    } catch {}
    setReady(true);
  }, []);

  const login = () => {
    try { localStorage.setItem(KEY, "1"); } catch {}
    setIsAuth(true);
  };
  const logout = () => {
    try { localStorage.removeItem(KEY); } catch {}
    setIsAuth(false);
  };

  return <Ctx.Provider value={{ isAuth, ready, login, logout }}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
