import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvide/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;