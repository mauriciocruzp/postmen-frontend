import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../consts/routes';
import Login from './Login/Login';
import Home from './Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
