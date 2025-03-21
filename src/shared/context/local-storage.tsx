import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';

export enum LocalStorageKeys {
  _user = 'user',
}
type StoredValue = string | number | boolean | Record<string, any> | null;
export type StoredValues = Record<LocalStorageKeys, StoredValue>;
interface LocalStorageContextType {
  storedValues: Partial<StoredValues>;
  updateStoredValue: (key: LocalStorageKeys, newValue: any) => void;
  getStoredValue: (key: LocalStorageKeys) => any;
  lsInitialized: boolean;
}

const LocalStorageContext = createContext<LocalStorageContextType>({
  storedValues: {},
  updateStoredValue: () => {},
  getStoredValue: () => {},
  lsInitialized: false,
});

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const [storedValues, setStoredValues] = useState<Partial<StoredValues>>({});

  const getStoredValue = useCallback((key: string) => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : null;
    } catch {
      return storedValue;
    }
  }, []);

  const updateStoredValue = (key: LocalStorageKeys, newValue: any) => {
    if (typeof newValue === 'string') {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    setStoredValues((prev) => ({ ...prev, [key]: newValue }));
  };

  useEffect(() => {
    const keys = Object.keys(localStorage) as LocalStorageKeys[];
    const state: Partial<StoredValues> = {};
    keys.forEach((key) => {
      const value = getStoredValue(key);
      if (value !== null) {
        state[key] = value;
      }
    });
    setStoredValues(state);
  }, [getStoredValue]);

  return (
    <LocalStorageContext.Provider
      value={{
        storedValues,
        updateStoredValue,
        getStoredValue,
        lsInitialized: !!Object.keys(storedValues).length,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider',
    );
  }
  return context;
};
