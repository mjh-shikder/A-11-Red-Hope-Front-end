import { use } from "react"
import { AuthContext } from "../context/AuthContext"

const useAuthContext = () => {
    const authData = use(AuthContext);
    return authData;
}

export default useAuthContext