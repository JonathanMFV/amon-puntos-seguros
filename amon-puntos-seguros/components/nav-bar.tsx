import Link from "next/link";
import { siteConfig } from "./site";

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-150 fixed w-full z-50 top-0 bg-black">
                <div className="navbar-start flex gap-x-4">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {siteConfig.navItems.map((i) => (
                                <li key={i.href}>
                                    <Link href={i.href}>{i.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a className="font-bold text-xs sm:text-sm md:text-md lg:text-lg">
                        AmonPuntosSeguros
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {siteConfig.navItems.map((i) => (
                            <li key={i.href}>
                                <Link
                                    href={i.href}
                                    className="rounded-lg gap-x-3"
                                >
                                    {i.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="/simulacro-virtual"
                        className="btn border-color-green-one text-color-green-one hover:bg-color-green-one hover:text-black btn-xs sm:btn-sm rounded-lg bg-[7ac7a9]"
                    >
                        Simulacro Virtual
                    </a>
                </div>
            </div>
        </>
    );
}
