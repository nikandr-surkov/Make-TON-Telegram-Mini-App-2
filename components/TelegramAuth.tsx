'use client'

import { useEffect, useState } from 'react'

export default function TelegramAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        authenticateUser()
        const interval = setInterval(authenticateUser, 55 * 60 * 1000) // Re-authenticate every 55 minutes
        return () => clearInterval(interval)
    }, [])

    const authenticateUser = async () => {
        const WebApp = (await import('@twa-dev/sdk')).default;
        WebApp.ready();
        const initData = WebApp.initData;
        if (initData) {
            try {
                const response = await fetch('/api/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ initData }),
                })

                if (response.ok) {
                    setIsAuthenticated(true)
                } else {
                    console.error('Authentication failed')
                    setIsAuthenticated(false)
                }
            } catch (error) {
                console.error('Error during authentication:', error)
                setIsAuthenticated(false)
            }
        }
    }

    const accessProtectedPage = async () => {
        if (isAuthenticated) {
            try {
                const response = await fetch('/protected')
                if (response.ok) {
                    window.location.href = '/protected'
                } else {
                    alert('You are not authorized to access the protected page.')
                }
            } catch (error) {
                console.error('Error accessing protected page:', error)
                alert('An error occurred while trying to access the protected page.')
            }
        } else {
            alert('You need to be authenticated to access the protected page.')
        }
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            {isAuthenticated ? (
                <>
                    <p>Authenticated!</p>
                    <button
                        onClick={accessProtectedPage}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Access Protected Page
                    </button>
                </>
            ) : (
                <p>Authenticating...</p>
            )}
        </div>
    )
}