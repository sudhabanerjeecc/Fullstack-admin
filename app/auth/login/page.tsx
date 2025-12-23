import LoginForm from '@/components/auth/LoginForm'
import TestSupabase from '@/lib/TestSupabase'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className="min-h-100 p-0 p-sm-6 d-flex align-items-stretch">
            <LoginForm />
        </div>
    )
}
