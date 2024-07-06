import { CardListContainer } from "@/src/styles/components/cartList";
import { CartProduct } from "./cartProduct";
import { useShop } from "@/src/hooks/useShop";

export function ProductList() {
    const { products } = useShop();

    function renderProducts() {
        if (products.length === 0) {
            return <span>Seu carrinho está vazio</span>
        }

        return products.map((item) => (
            <CartProduct key={item.id} product={item} />
        ))
    }

    return (
        <CardListContainer>
            {renderProducts()}
        </CardListContainer>
    )
}