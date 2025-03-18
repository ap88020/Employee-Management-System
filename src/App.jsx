import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState();
  const authdata = useContext(AuthContext);

  useEffect(() => {
    if(authdata){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role);
      }
    }
  }, [authdata]);
  

  const handleLogin = (email,password) => {
    if(email == "admin@.a" && password == "123"){
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}));
    }else if(authdata && authdata.employee.find((e) => email == e.email && password == e.password)){
      setUser("user");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
    }
    else{
      alert("Invalid credentials");
    }
  }

  
  return (
    <>
      {
        !user ? (
          < Login handleLogin={handleLogin} />
        ): (
          user == 'admin' ? <AdminDashBoard /> : < EmployeeDashboard />
        )
      }

    </>
  )
}

export default App
