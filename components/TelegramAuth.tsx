'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react'

export default function TelegramAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // useEffect(() => {
    //     authenticateUser()
    //     const interval = setInterval(authenticateUser, 55 * 60 * 1000) // Re-authenticate every 55 minutes
    //     return () => clearInterval(interval)
    // }, [])

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

    return (
        <div className="flex flex-col items-center space-y-4 p-8">
            {isAuthenticated ? (
                <>
                    <p>Authenticated!</p>
                    <Link
                        href="/protected"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Access Protected Page
                    </Link>
                </>
            ) : (
                <div>
                    <p>You need to be an owner of this account</p>
                    <button onClick={authenticateUser}>Authenticate</button>
                </div>
            )}
        </div>
    )
}