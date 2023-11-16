import styled from 'styled-components';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { Body } from '../../designsystem/Typography';

interface ToastProps {
  message: string;
  id: string;
  remove: (id: string) => void;
}

const Toast = ({ message, id, remove }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      remove(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, remove]);

  return (
    <ToastMessage>
      <Body>{message}</Body>
    </ToastMessage>
  );
};

type ToastContextType = {
  addToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string }>>([]);

  const addToast = (message: string) => {
    const id = uuid();
    setToasts(prevToasts => [...prevToasts, { id, message }]);
    console.log(message);
    console.log([...toasts, { id, message }]);
  };

  const removeToast = (id: string) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer>
        {toasts.map(toast => (
          <Toast key={toast.id} id={toast.id} message={toast.message} remove={removeToast} />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};



const ToastContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 4px;
  padding: 10px;
`;

const ToastMessage = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;

  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10);
`;

const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export default useToast;