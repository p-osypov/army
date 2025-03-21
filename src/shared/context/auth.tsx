import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { LocalStorageKeys, useLocalStorageContext } from './local-storage';

interface User {
  username: string;
}

interface AuthContextType {
  login: (username: string, password: string) => void;
  logout: () => void;
  username: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const { getStoredValue, updateStoredValue } = useLocalStorageContext();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUser: User | null = getStoredValue(LocalStorageKeys._user);
    if (storedUser) setUsername(storedUser.username);
  }, [getStoredValue]);

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setUsername(username);
      updateStoredValue(LocalStorageKeys._user, { username });
      void router.push('/admin');
    } else {
      alert('Incorrect login or password');
    }
  };

  const logout = () => {
    updateStoredValue(LocalStorageKeys._user, null);
    setUsername(null);
    void router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
