import Meta from 'antd/es/card/Meta';
import './App.css';
import {routes} from './routes/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/Layout/view';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useUser } from "@thirdweb-dev/react";

function App() {
  const { user, isLoggedIn, isLoading } = useUser();
  console.log(user, isLoggedIn, isLoading)
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
            console.log(route);
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
