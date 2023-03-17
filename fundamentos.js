//ATAJOS | simple react snippets
/*
    --> imr+tab  | import react
    --> rafc+tab | react arrow function component

    HOOKS
    
    --> uef+tab  | useEffect() | re-render cuando sus dependencias cambian: . EJ: boton de refrescar sin recargar pagina
                               | sin dependencia se llama solo una vez, return controla desmontaje.
    --> uref+tab | useRef()    |
    --> usf+tab  | useState()  | cambiar el valor renderiza todo donde está:
                               | se puede usar su Callback para llamar valores anteriores (value)=>{...value}

    EXTRAS
    --> clg+tab  | console.log() 
    --> (Puntero sobre una variable) ctrl+alt+l  | console.log bonito con extension TurboConsoleLog

//COMPONENTES

    --> rafc+tab | react arrow function component
    -- ciclo de vida de un componente: 1_Montar 2_Renderizar 3_Desmontar 4 error Handling
    -- todo componente react es una arrow funcion JS que retorna JSX
    -- componentes padres pueden enviar data a componentes hijos con props, se recomienda filtrar data desde padres
    !!-- input type="text" name="hola"  | "hola" es el nombre de la variable que enviará al backend por http
                                        | todos valores que esten en name se enviarán post
    -- (()=>{}) retorna JSX
    -- (()=>()) retorna HTML
   
    //PROPS:

        -- se pueden heredar props entre componentes
        -- puedo enviar variables, funciones, objetos, etc, todo.
        -- Usar destructuring para extraer props | EJ: const HelloWorld = ({titulo,fecha})=>{....

    //RETURN JSX:

        -- onClick={myfunction}                      | llamar 1 funcion     
        -- onClick={ ()=>{myfunction;fun2;fun3} }    | llamar 3 funciones     
        -- {myvariable !== "" && myvariable}         | si la comparacion es true, entonces renderiza

    //PROPTYPES
        --definir tipado de props, String, Number, exist, etc..
        --title:PropTypes.string.isRequired
    //FORMULARIOS
    
        --onClick  | click en el elemento HTML
        --onChange | cambios en elemento HTML | event.target.value       tiene el valor de la funcion OnChange
        --onSubmit | envia todos los valores  | event.preventDefault()   previene envío de formulario y recarga de pagina

    //FORMIK + ANT + YUP
        --<Formik onSubmit={submit()}
                  initialValues={{ name: 'jared' }}
                  validationSchema="">
        ANT
        -- <Modal BodyStyle={{background: blue;}} open={true} onCancel=callback footer=null or footer=<button>Aceptar</button> >
        -- <CheckboxGroup onChange={{event=>clg(event)}}>
            <Checkbox value={1}></Checkbox>
           </CheckboxGroup>
        


//METODOS HTTP
    --GET    | leer
    --POST   | agregar
    --DELETE | borrar
    --PATCH  | actualizacion parcial
    --PUT    | actualización total

    -- peticiones JS con fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`) retorna promesa


//PROMESAS
    -- const promesa = new Promise((resolve,reject)=>{....}   |  instruccion asincrona | llamar resolve para resolver
    -- return promesa.catch()   |   retorna resolución exitosa o no exitosa con error  (como trycatch)
    -- promesa.then(()=>{})     |   cuando se resuelva con exito haga esto.. (captura cosas de la promesa)
    -- promesa.finally(()=>{})  |   cuando se resuelva con o sin exito haga esto..


//TOKEN
    -- todas las apps deberian usar token
    -- se guardan en localStorage o cookies para autologueado
    -- ej: https://api.giphy.com/v1/gifs/random?api_key=2ZXewLdwiAGZPgVkSLn3AqitEO6CeN4I | request parameter: ?api_key=

//REACT DOM ROUTER
    --libreria para crear rutas
    --componentes: <Routes/>, <Route path="/..." element={<componenteAEnrutar/>}/> 


//REDUX
    --contenedor global para guardar data en variables en toda la aplicacion | useSelector((store))

    CONCEPTOS:

    -- Actions: const myAction = {type: auth/login}         | Obj JSON | {type: ""} reglas que indican una accion sobre store
    -- Reducers: const myReducer = (state,myAction)=>state  | Func     | motor que transforma reglas action => logica
    -- store: {nombre, Actions, myReducer}                  | Obj JSON | {data} que usa el reducers como motor para hacerse CRUD
    -- store.dispatch(action)                               | Ejecuta un motor (reducer) en la store dada una regla (action)
    
    --useSelector()     | llamado a la store desde componente.jsx


    --Configuración:
        1. crear store.js y importar configureStore() para obtener reducer
        2. en index.js envolver BrowserRoutes en un <Provider store={store}/>
        3: para auth: crear authSlice.js, importar createSlice({name,initialState,reducers}) y exportar reducers de authSlice.actions
    */