import Meta from 'antd/es/card/Meta';
import './App.css';
import {routes} from './routes/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/Layout/view';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useUser, useAddress, useContract } from "@thirdweb-dev/react";
import { useEffect } from 'react';

function App() {
  const address = useAddress();
  const { contract, isLoading: isContract } = useContract(address)
  console.log(contract);
  console.log(address);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

    <Router>
      <Routes>
        {
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <View display={ route.component } layout={ route.layout } title={ route.title}/>
                }
              />
            )
          })
        }
      </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;
