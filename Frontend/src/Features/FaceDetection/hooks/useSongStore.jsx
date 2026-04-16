import { useContext } from "react";
import { SongContext } from "../context/SongContext";
import { getSongs, getTracks } from "../api/songs.api";

export const useSongStore = () => {
    const context = useContext(SongContext)
    const {setPlayListId, setGettingSongs, setSongs} = context
    
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

    const handleTracks = async (id) => {
        try {
            setGettingSongs(true)
            const response = await getTracks(id)
            setSongs(response)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setGettingSongs(false)
        }
    }

    return (
        {handleGetSongs, handleTracks}
    )
}