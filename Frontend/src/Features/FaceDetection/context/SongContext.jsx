import { createContext, useState } from "react";

export const SongContext = createContext()

export const SongProvider = ({children}) => {
    const [playListId, setPlayListId] = useState(null)
    const [songs, setSongs] = useState(null)
    const [gettingSongs, setGettingSongs] = useState(true)

    return (
        <SongContext.Provider value={{playListId, setPlayListId, setGettingSongs, gettingSongs, songs, setSongs}}>
            {children}
        </SongContext.Provider>
    )

}