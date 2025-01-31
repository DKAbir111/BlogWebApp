// 'use client'
import Link from "next/link"
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const links = <>
        <li><Link href={'/'}>Home</Link></li>
        <>
            {user?.email && <li><Link href={'/profile'}>Profile</Link></li>}
        </>
    </>

    return (
        <div className="navbar bg-base-300 fixed z-10 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className="text-2xl font-bold">Let's Blog</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <>
                    {
                        user?.email ? <>
                            <LogoutLink><button className="btn rounded-sm">Logout</button></LogoutLink>
                        </> :
                            <>
                                <LoginLink ><button className="btn rounded-sm btn-neutral">Login</button></LoginLink >
                                <RegisterLink>   <button className="btn rounded-sm btn-outline">Register</button></RegisterLink>
                            </>

                    }
                </>
            </div>
        </div>
    )
}
