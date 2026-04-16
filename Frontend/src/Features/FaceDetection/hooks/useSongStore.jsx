import { useContext } from "react";
import { SongContext } from "../context/SongContext";
import { getSongs } from "../api/songs.api";

export const useSongStore = () => {
    const context = useContext(SongContext)
    const {setPlayListId, setGettingSongs} = context
    
    const handleGetSongs = async (mood) => {
        try {
            setGettingSongs(true)
            const response = await getSongs(mood)
            setPlayListId(response.song.playListId)
            console.log(response.song.playListId)
        } catch (error) {
            console.log(error)
        } finally {
            setGettingSongs(false)
        }
    } 

    return (
        {handleGetSongs}
    )
}