import React from "react";
import LayoutUser from "@/components/LayoutUser";
import getCurrentUser from "../actions/getCurrentUser";

export default async function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return <LayoutUser user={currentUser!}>{children}</LayoutUser>;
}
