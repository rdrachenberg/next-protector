import { FingerprintIcon, LockIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen w-full mx-auto bg-gradient-to-r from-indigo-900 via-indigo-700 to-gray-900">
      <div className="max-w-lg p-4 rounded-lg flex flex-col justify-center items-center">
        <FingerprintIcon className="text-indigo-100 rounded-md  w-24 h-24" />
        <div className="text-center max-w-screen-sm pt-4 pb-10">
          <h1 className="text-white font-bold text-2xl">Next Protector</h1>
          <p className="text-gray-200 pt-5">
           Built as a shell template for protected data using Next.js. Has email & password auth, a
            PostgreSQL database, and protected content, using Next Auth and
            Prisma. 
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/protected"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold space-x-1 text-indigo-700 shadow-sm hover:bg-green-600 hover:text-white"
          >
            <LockIcon className="w-4 h-4 hover:bg-black hover:text-white" />
            <span>Protected Content</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
