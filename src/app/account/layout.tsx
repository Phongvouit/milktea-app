import React from "react";
import LayoutUser from "@/components/LayoutUser";
import getCurrentUser from "../actions/getCurrentUser";
import SettingForm from "./components/SettingForm";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <LayoutUser user={currentUser!}>
      <section className="bg-white p-4 rounded-md">
        <div className="md:flex">
          {children}
        </div>
        <SettingForm currentUser={currentUser!} />
      </section>
    </LayoutUser>
  );
}
