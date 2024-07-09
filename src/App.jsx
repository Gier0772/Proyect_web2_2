import { useState } from 'react'
//importasnto los modulos de firebase
import appFirebase from './credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

const auth = getAuth(appFirebase)



function App() {
  
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null)
    }
  })

  return (
   <div>

      {usuario ? <Home correoUsuario = {usuario.email} />:<Login/>}

   </div>
  )
}

export default App;

