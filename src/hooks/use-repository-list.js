import { useState, useEffect } from "react"

import { request } from "../utils/request"

export const useRepositoryList = (user, type) => {
  const [error, setError] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    getRepositoryList(user, type)
  }, [user, type])

  return {
    error,
    isLoading,
    repositories
  }

  async function getRepositoryList(user, type) {
    setIsLoading(true)
    try {
      const response = await request.get(
        `https://api.github.com/users/${user}/repos?type=${type}`
      )
      setRepositories(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }
}
