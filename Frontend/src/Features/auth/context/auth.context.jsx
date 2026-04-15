import {  useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading, loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )

}