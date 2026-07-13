import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState('Admin');

  return <AuthContext value={{ auth, setAuth }}>{children}</AuthContext>;
};
