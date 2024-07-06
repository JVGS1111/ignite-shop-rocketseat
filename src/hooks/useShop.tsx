import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

export function useShop() {
    const context = useContext(ShopContext);

    return context;
}