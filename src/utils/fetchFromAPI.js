
const BASE_URL = import.meta.env.VITE_API_KEY

export const fetchFromAPI = async () =>{
    const res = await fetch(BASE_URL)
    const data = res.json()
    return data
}