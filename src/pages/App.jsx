import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../consts/routes';
import Login from './Login/Login';
import Home from './Home/Home';
import Shipment from './Shipment/Shipment';
import Package from './Package/Package';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.shipment} element={<Shipment />} />
      <Route path={routes.package} element={<Package />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
