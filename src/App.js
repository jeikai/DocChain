import Meta from 'antd/es/card/Meta';
import './App.css';
import {routes} from './routes/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/Layout/view';

function App() {
  return (
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
  );
}

export default App;
