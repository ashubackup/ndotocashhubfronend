import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "../src/Css/custom.css";
import Login from './Pages/Login';
import Routing from './Routes/Routing';

function App() {

  //Navigate
  const navigate=useNavigate();

  //To run on load
  useEffect(()=>{
    getLocalStorage();
  },[]);

  //Getting ani from local storage
  const getLocalStorage=()=>{
    let ani=localStorage.getItem("ani");

    if(ani===null || ani===undefined || ani==='' || ani===' ')
    {
      return(
        <>
          <Login/>
        </>
      );
      // navigate("/login");
    }
  }

  return (
    <>
      <Routing/>
    </>
  );
}

export default App;