import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';

interface LocalStorageContextType {
  storedValues: { [key: string]: any };
  updateStoredValue: (key: string, newValue: any) => void;
  getStoredValue: (key: string) => any;
}

const LocalStorageContext = createContext<LocalStorageContextType | null>(null);

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const [storedValues, setStoredValues] = useState<{ [key: string]: any }>({});

  const getStoredValue = useCallback((key: string) => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : null;
    } catch {
      return storedValue;
    }
  }, []);

  const updateStoredValue = (key: string, newValue: any) => {
    if (typeof newValue === 'string') {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    setStoredValues((prev) => ({ ...prev, [key]: newValue }));
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const initialValues: { [key: string]: any } = {};
    keys.forEach((key) => {
      const storedValue = getStoredValue(key);
      if (storedValue !== null) {
        initialValues[key] = storedValue;
      }
    });
    setStoredValues(initialValues);
  }, [getStoredValue]);

  return (
    <LocalStorageContext.Provider
      value={{ storedValues, updateStoredValue, getStoredValue }}
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
