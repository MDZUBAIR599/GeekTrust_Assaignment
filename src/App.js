import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { useContext, useEffect } from 'react';
import { Appcontext } from './Context/AppontextProvider';
import { Fetch_Products } from './Api/api';


function App() {

  return (
     <>
      <Navbar/>
      <AllRoutes/>
     </>
  );
}

export default App;
