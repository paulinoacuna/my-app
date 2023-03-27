export const getLocalUser = ()=> {

   //get user localStorage
   const user = JSON.parse(localStorage.getItem("user"))
   if(user?.token){
      return user
   }else{
      
      return null
   }
}