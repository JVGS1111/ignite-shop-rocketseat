import { CartContainer } from "@/src/styles/components/cart";

import { ProductList } from "./productList";
import { CartResume } from "./cartResume";
import { CartHeader } from "./cartHeader";
import { useShop } from "@/src/hooks/useShop";
import { useEffect } from "react";

export function Cart() {
    const { isCartOpen } = useShop();

    useEffect(() => {
        console.log("mudou");

    }, [isCartOpen])

    return (
        <CartContainer isOpen={isCartOpen}>
            <CartHeader />
            <ProductList />
            <CartResume />
        </CartContainer>
    )
}