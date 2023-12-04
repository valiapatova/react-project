import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider =({
    value,
    children
})=>{
    return(
        <AuthContext.Provider value = {value}>
            {children}        
        </AuthContext.Provider>

    );
};

AuthContext.displayName='AuthContext';

export default AuthContext;