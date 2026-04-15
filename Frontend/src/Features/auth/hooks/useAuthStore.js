import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {register, login, check, logout} from '../api/auth.api'

export const useAuthStore = () => {
    const context = useContext(AuthContext)
    const {setLoading, setLoggedIn, setUser} = context

    const handleRegister = async (username,email,password) => {
        try {
            setLoading(true)
            const response = await register(username, email, password)
            setUser(response)
            setLoggedIn(true)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogin = async (identifier, password) => {
        try {
            setLoading(true)
            const response = await login(identifier, password)
            setUser(response)
            setLoggedIn(true)            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    const handleLogout = async () => {
        try {
            setLoading(true)
            await logout()
            setUser(null)
            setLoggedIn(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleCheck = async () => {
        try {
            setLoading(true)
            const response =  await check()
            setUser(response)
            setLoggedIn(true)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        {handleLogin, handleLogout, handleRegister, handleCheck}
    )

}