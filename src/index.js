import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThirdwebProvider } from "@thirdweb-dev/react";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
     activeChain="ethereum"
     clientId="e5d908e99d060e2ef06da7debf4e6613"
     supportedWallets={[
      metamaskWallet(),
      coinbaseWallet(),
      walletConnect({
        projectId: "YOUR_PROJECT_ID",
      }),
      safeWallet(),
    ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
