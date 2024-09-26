"use client";
import Link from "next/link";
import useRoutes from "@/hooks/useRoutes";
import CartIcon from "./CartIcon";
import Image from "next/image";
import clsx from "clsx";
import UserLinks from "./UserLinks";
const Navbar = () => {
  const routes = useRoutes();
  return (
    <div className="w-full bg-white sticky inset-0 z-30">
      <header className="shadow border-b-4">
        <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-2 md:mx-auto md:flex-row items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="mx-auto w-auto"
            height="50"
            width="50"
          />
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute right-4 top-5 cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0C713D"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-labelledby="header-navigation"
            className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>
            <ul className="flex flex-col items-center md:flex-row uppercase text-[#666666] mt-0 md:mt-2">
              {routes.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={clsx(
                      `
                    font-bold 
                    md:mr-12
                    hover:text-green-800
                    `,
                      item.active && "text-green-800"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex md:mt-0 items-center gap-4">
              <li>
                <UserLinks />
              </li>
              <li>
                <CartIcon />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
