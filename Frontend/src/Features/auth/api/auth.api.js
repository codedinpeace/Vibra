import { api } from "../../../utils/api";

export const register = async (username,email,password) =>{
    try {
        const response = await api.post("/auth/register", {username,email,password})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const login = async (identifier, password) => {
    try {
        const response = await api.post("/auth/login", {identifier, password})
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const logout = async () => {
    try {
        await api.post("/auth/logout")  
    } catch (error) {
        console.log(error)
    }
}

export const check = async () => {
    try {
        const response = await api.get("/auth/check")
        return response.data
    } catch (error) {
        console.log(error)        
    }
}