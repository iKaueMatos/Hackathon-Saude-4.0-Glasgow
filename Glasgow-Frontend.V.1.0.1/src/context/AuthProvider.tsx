import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string,
  password: string,
  name?: string
}

interface AuthContextType {
  authToken: string | null;
  user: User | null;
  login: (data: { token: string; user: User }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('authToken'));
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!authToken && shouldRedirect) {
      window.location.href = "/sign-up";
    }
  }, [authToken, shouldRedirect]);

  const login = ({ token, user }: { token: string; user: User }) => {
    setShouldRedirect(true)
    setAuthToken(token);
    setUser(user);
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = "/sign-in";
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
