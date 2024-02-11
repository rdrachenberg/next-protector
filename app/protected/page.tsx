import SignOut from "@/app/components/SignOut"
import AuthStatus from "../components/AuthStatus"
export default function ProtectedPage() {
    return <div className='flex h-screen bg-black'>
        <div className='w-screen h-screen flex flex-col space-y-5 justify-center items-center text-orange-300'>
            <AuthStatus />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o3exSWWlDjk?si=-j73-IZDblMiwlpT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <SignOut />
        </div>
        
    </div>
}