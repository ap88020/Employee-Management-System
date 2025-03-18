import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState();
  const [loggedInUser, setLoggedInUser] = useState()
  const authdata = useContext(AuthContext);

  // useEffect(() => {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       const userData = JSON.parse(loggedInUser);
  //       setUser(userData.role);
  //       setLoggedInUser(userData.data);
  //     }
  // });

  const handleLogin = (email,password) => {
    if(authdata.admin.find((e) => email == e.email && password == e.password)){
      // const admin =  ;
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}));
      setLoggedInUser(authdata.admin);
    }else if(authdata){
      const employee =  authdata.employee.find((e) => email == e.email && password == e.password);
      if(employee){
        setUser('employee');
        setLoggedInUser(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data : employee}));
      }
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
          user == 'admin' ? <AdminDashBoard data={loggedInUser} /> : < EmployeeDashboard data={loggedInUser} />
        )
      }

    </>
  )
}

export default App
