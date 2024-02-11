import { UserPlusIcon } from "lucide-react";
import Link from "next/link";
import Form from "../components/Form";

export default function RegisterPage() {

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-100'>
        <div className='z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl'>
            <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 pb-6 pt-8 text-center sm:px-16'>
                <Link href={'/'}>
                    <UserPlusIcon className='h-10 w-10 text-black'/>
                </Link>
                <h3 className='text-xl font-semibold'>Signup</h3>
                <p className='text-sm text-gray-500'>Create an account</p>
            </div>
            <Form type={'register'}/>
        </div>
        </div>
    )
}