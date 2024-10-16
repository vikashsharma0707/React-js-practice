import { useContext } from "react";
import { myloginContext } from "../LoginContext";

const AuthUser=()=>{
    const {user,logout}=useContext(myloginContext)
    return(
        <>
        <h1>Wellcome : {user.name}</h1>
        <button onClick={()=>{logout()}}>Logout</button>
        </>
    )
}
export default AuthUser;
