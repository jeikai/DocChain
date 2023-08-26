import Meta from 'antd/es/card/Meta';
import './App.css';
import { Landing, Login } from './pages';
import { routes } from './routes/index'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import View from './components/Layout/view';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useUser, useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { useEffect } from 'react';
import { PrivateRoute } from './components';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// "https://17b6d0dbbd7024345d11fd1b414da6c5.ipfscdn.io/ipfs/bafybeie3aqwskrjvziy4tdbrprlad3c6kqy5huox6rqfaxegdvpbvocvye/"
function App() {
  // const contract_address = '0x259EDE541EBF509B7e72A9dfb42181900b4947b6'
  // const address = useAddress();
  // const { contract, isLoading } = useContract(contract_address)
  // const { mutateAsync: storeImageData } = useContractWrite(contract, "storeImageData")
  // console.log(contract);
  // const call = async () => {
  //   try {
  //     const data = await storeImageData({ args: ['image_url', '0xC81E6F920d449b8bE4CDaAEE3f29CCF7ad73D285', 'test_1'] });
  //     console.info("contract call successs", data);
  //   } catch (err) {
  //     console.error("contract call failure", err);
  //   }
  // }
  // useEffect(() => {
  //   // call()
  // }, [contract])
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    // <>
    //   {/* <Landing /> */}
    //   <Login />
    // </>
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
                    <>
                      {route.permission ?
                        <PrivateRoute>
                          <View display={route.component} layout={route.layout} title={route.title} page={route.page} />
                        </PrivateRoute> :
                        <View display={route.component} layout={route.layout} title={route.title} page={route.page} />
                      }
                    </>
                  }
                />
              )
            })
          }
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>

  );
}

export default App;
