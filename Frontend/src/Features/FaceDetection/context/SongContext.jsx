import { createContext, useState } from "react";

export const SongContext = createContext()

export const SongProvider = ({children}) => {
    const [playListId, setPlayListId] = useState(null)
    const [gettingSongs, setGettingSongs] = useState(false)

    return (
        <SongContext.Provider value={{playListId, setPlayListId, setGettingSongs, gettingSongs}}>
            {children}
        </SongContext.Provider>
    )

}