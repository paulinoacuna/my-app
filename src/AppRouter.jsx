import { Routes,Route } from "react-router-dom"
import AuthRouter from "./auth/router/AuthRouter"
import JournalRouter from "./journal/router/JournalRouter"


const AppRouter = () => {
  //Nivel manejando Modulos
  return (
   
<Routes>
        //ruta de login y registro
    <Route path="/auth/*" element={<AuthRouter/>}/>
        //ruta app
    <Route path="/*" element={<JournalRouter/>}/>
</Routes>


    
  )
}

export default AppRouter
