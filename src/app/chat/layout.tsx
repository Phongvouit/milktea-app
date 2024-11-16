import LayoutUser from "@/components/LayoutUser";
import UserAdmin from "@/components/UserAdmin";
import getAdmin from "../actions/getAdmin";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getAdmin();
  return (
    <LayoutUser>
      <div className="flex h-screen w-full">
        <div className="w-1/4">
          <UserAdmin admin={admin!} />
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </LayoutUser>
  );
}
