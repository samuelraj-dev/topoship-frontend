import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {

    setIsLoading(true)
    setError(false)

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if(!response.ok) {
      setIsLoading(false)
      setError(data.error)
    }
    if(response.ok) {
      // save user to localstorage
      localStorage.setItem('user', JSON.stringify(data))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: data })

      setIsLoading(false)
    }

  }

  return { login, isLoading, error }
}