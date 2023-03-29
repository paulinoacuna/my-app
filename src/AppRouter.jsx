import { Routes,Route } from "react-router-dom"

import AuthRouter from "./auth/router/AuthRouter"
import JournalRouter from "./journal/router/JournalRouter"

import AdminRouter from "./admin/router/AdminRouter"
import StudentRouter from "./student/router/StudentRouter"


const AppRouter = () => {
  //Nivel manejando Modulos
  return (
   
<Routes>
        //ruta de login y registro
    <Route path="/auth/*" element={<AuthRouter/>}/>
        //ruta app
    <Route path="/app/*" element={<JournalRouter/>}/>
    <Route path="/admin/*" element={<AdminRouter/>}/>
    <Route path="/student/*" element={<StudentRouter/>}/>

</Routes>


    
  )
}

export default AppRouter
