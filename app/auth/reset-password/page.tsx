import ResetPasswordForm from '@/components/auth/ResetPasswordForm'
import React from 'react'

export default function page() {
    return (
        <div className="min-h-100 p-0 p-sm-6 d-flex align-items-stretch">
            <div className="card w-25x grow flex-sm-grow-0 m-sm-auto">
                <ResetPasswordForm />
            </div>
        </div>
    )
}
