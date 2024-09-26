"use client"
import Image from "next/image";
import useUserRoutes from "@/hooks/useUserRoutes";
import UserMenuItem from "./UserMenuItem";

const LayoutUser = ({ children }: { children: React.ReactNode }) => {
  const routes = useUserRoutes();
  return (
    <div className="w-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 flex">
        <div className="h-screen w-3/12 pb-10">
          <div className="flex h-full flex-grow flex-col pt-5">
            <div className="flex mt-5 items-center px-4">
              <div
                className="
            relative
            inline-block
            rounded-full
            overflow-hidden
            h-11
            w-11
            "
              >
                <Image alt="Avatar" src={"/images/profile.png"} fill />
              </div>
              <div className="flex ml-3 flex-col">
                <h3 className="text-xs text-gray-500">Tài khoản của</h3>
                <p className="text-lg font-medium">Vo Phong</p>
              </div>
            </div>

            <div className="flex mt-3 flex-1 flex-col">
              <div className="">
                <nav className="flex-1">
                  {routes.map((route) => (
                    <UserMenuItem
                      key={route.href}
                      href={route.href}
                      label={route.label}
                      icon={route.icon}
                      active={route.active}
                      onClick={route.onClick}
                    />
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="w-9/12 mt-10">
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
