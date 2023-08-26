import React, { createContext, useState } from 'react';

export const PublicKeyContext = createContext();

export const PublicKeyProvider = ({ children }) => {
  const [publicKey, setPublicKey] = useState('');

  return (
    <PublicKeyContext.Provider value={{ publicKey, setPublicKey }}>
      {children}
    </PublicKeyContext.Provider>
  );
};