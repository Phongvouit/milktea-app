import { FullOrderType } from "@/types";
import { useMemo } from "react";
import { Tab } from "@/types";

const useOrderFilter = ({
  orders,
  openTab,
}: {
  orders: FullOrderType[];
  openTab: Tab;
}) => {
  const filterOrders = useMemo(() => {
    if (openTab.value === "Tất cả đơn") {
        return orders
    } else {
        const filterOrders = orders.filter((item) => item.status === openTab.value);
        return filterOrders;
    }
  }, [openTab, orders]);
  return filterOrders;
};
export default useOrderFilter;
