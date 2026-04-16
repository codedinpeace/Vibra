import api from '../../../axiosInstance/api'

export const getSongs = async (mood) => {
    try {
        const response = await api.get(`/song/get-songs?mood=${mood}`)
        console.log(mood)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getTracks = async (id) => {
    try {
        const response = await api.get(`/song/playlist/${id}/tracks`)
        return response.data
    } catch (error) {
    console.log(error)        
    }
}

