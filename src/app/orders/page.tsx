"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useTabs from "@/hooks/useTabs";
import { Tab } from "@/types";
import useOrderFilter from "@/hooks/useOrderFilter";
import OrderFilter from "./components/OrderFilter";
import EmptyOrder from "./components/EmptyOrder";
import Loading from "@/components/Loading";
import OrderFilterMobile from "./components/OrderFilterMobile";

const fetchOrders = () => {
  return fetch("http://localhost:3000/api/orders").then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json(); // Trả về dữ liệu
  });
};

const OrdersPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const tabs = useTabs();
  const [openTab, setOpenTab] = useState<Tab>(tabs[0]);
  if (status === "unauthenticated") {
    router.push("/");
  }

  const {
    data: orders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  const ordersFilter = useOrderFilter({ orders, openTab });

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching orders: {error.message}</div>;
  }

  return (
    <section>
      <div className="bg-white px-3">
        <nav className="flex flex-wrap gap-4 justify-between" role="tablist">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              className={
                "inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-green-800 hover:text-green-800" +
                (openTab.id === tab.id
                  ? "text-green-800 border-b-green-800"
                  : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(tab);
              }}
              data-toggle="tab"
              href={tab.href}
              role="tablist"
            >
              {" "}
              {tab.value}{" "}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative flex flex-col min-w-0 break-words w-full">
        <div className="flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab.id === 1 ? "block" : "hidden"} id="link1">
              {ordersFilter && ordersFilter.length === 0 ? (
                <EmptyOrder />
              ) : (
                ordersFilter?.map((order) => (
                  <div key={order.id}>
                    <OrderFilterMobile
                      key={order.id}
                      order={order}
                      className="block mobile:hidden"
                    />
                    <OrderFilter
                      key={order.id}
                      order={order}
                      className="hidden mobile:block"
                    />
                  </div>
                ))
              )}
            </div>
            <div className={openTab.id === 2 ? "block" : "hidden"} id="link2">
              {ordersFilter && ordersFilter.length === 0 ? (
                <EmptyOrder />
              ) : (
                ordersFilter?.map((order) => (
                  <div key={order.id}>
                    <OrderFilterMobile
                      key={order.id}
                      order={order}
                      className="block mobile:hidden"
                    />
                    <OrderFilter
                      key={order.id}
                      order={order}
                      className="hidden mobile:block"
                    />
                  </div>
                ))
              )}
            </div>
            <div className={openTab.id === 3 ? "block" : "hidden"} id="link3">
              {ordersFilter && ordersFilter.length === 0 ? (
                <EmptyOrder />
              ) : (
                ordersFilter?.map((order) => (
                  <div key={order.id}>
                    <OrderFilterMobile
                      key={order.id}
                      order={order}
                      className="block mobile:hidden"
                    />
                    <OrderFilter
                      key={order.id}
                      order={order}
                      className="hidden mobile:block"
                    />
                  </div>
                ))
              )}
            </div>
            <div className={openTab.id === 4 ? "block" : "hidden"} id="link4">
              {ordersFilter && ordersFilter.length === 0 ? (
                <EmptyOrder />
              ) : (
                ordersFilter?.map((order) => (
                  <div key={order.id}>
                    <OrderFilterMobile
                      key={order.id}
                      order={order}
                      className="block mobile:hidden"
                    />
                    <OrderFilter
                      key={order.id}
                      order={order}
                      className="hidden mobile:block"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersPage;
