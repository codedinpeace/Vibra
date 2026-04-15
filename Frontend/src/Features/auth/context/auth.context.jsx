import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading, loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )

}