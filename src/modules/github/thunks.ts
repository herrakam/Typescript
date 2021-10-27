import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";


export function getUserProfileThunk(username:string){
    return async (dispatch: Dispatch)=> {
      const {request, success, failure} =  getUserProfileAsync
      dispatch(request())
      try{
          const userProfile = await getUserProfile(username)
          dispatch(success(userProfile))
      }
      catch(e: any){ //e 뒤에 any 안붙이면 애러남!
        dispatch(failure(e))
      } 
    }
}
