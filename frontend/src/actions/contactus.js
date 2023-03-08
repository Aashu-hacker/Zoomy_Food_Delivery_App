import pizza from "../apis/pizza"
import { CONTACT_REQUEST,AUTH_ERROR} from "./types"
export const contact = (email,name,mobNo,message)=>async(dispatch,getState)=>{
    dispatch({type:CONTACT_REQUEST})
   try {
       const {data}=await pizza.post('/api/contact/contactus',{email,name,mobNo,message})
       dispatch({payload:data})
    //    localStorage.setItem('Contact',JSON.stringify(data))
   } catch (error) {
       dispatch({type:AUTH_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
   }
}