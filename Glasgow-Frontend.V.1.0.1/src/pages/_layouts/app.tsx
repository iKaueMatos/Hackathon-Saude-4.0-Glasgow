
import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '@/components/header'
import { api } from '@/lib/axios'


export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])
  
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />

      <div className="flex flex-col flex-1 gap-4 p-8 pt-6">

        <Outlet />
      </div>
    </div>
  )
}