import { CardListContainer } from "@/src/styles/components/cartList";
import { CartProduct } from "./cartProduct";

export function ProductList() {
    return (
        <CardListContainer>
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </CardListContainer>
    )
}