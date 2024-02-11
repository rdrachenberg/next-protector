'use client'
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOut() {
    return (
        <button onClick={() => signOut({callbackUrl: 'http://localhost:3000/'})} className='text-gray-400 hover:text-red-600 transition-colors flex items-center sapce-x-1'>
            <LogOutIcon className='w-4 h-4'/>
            <span>Sign Out</span>
        </button>
    )
}