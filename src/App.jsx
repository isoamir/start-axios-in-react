import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState(0)

  useEffect (() =>{
    async function getdata() {
      try {
        const resalt = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await resalt.json()
        if(!resalt.ok){
          throw new Error("data is not JSON")
        }
        setUsers(data);
        toast.success("defalt  text")
      } catch (error) {
        toast.error(error.message)
      }
    }
    getdata()
  }, []); 

  return (
    <div>
      <ToastContainer/>
    </div>
  )
}

export default App
