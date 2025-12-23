import React from 'react'
import ProtectedLayoutClient from './ProtectedLayoutClient'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ProtectedLayoutClient>{children}</ProtectedLayoutClient>
    )
}
