import React, { useState, useContext } from "react"
import {GoogleSearchContext} from '../contexts/GoogleSearchContext'

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const GoogleContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

     const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            "method": "GET",
            "headers": {
                "x-user-agent": "desktop",
                "x-rapidapi-host": "google-search3.p.rapidapi.com",
                "x-rapidapi-key": "5004efafb9msh4bc462359e588c3p145a3cjsn5a13394dc6ae"
            }
        })

        const data = await response.json()

        setResults(data)
        setIsLoading(false)
    }

    return (
        <GoogleSearchContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </GoogleSearchContext.Provider>
    )
}


export const useResultContext = () => useContext(GoogleSearchContext)