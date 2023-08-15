import Meta from 'antd/es/card/Meta';
import './App.css';
import {routes} from './routes/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component/>}
              />
            )
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
