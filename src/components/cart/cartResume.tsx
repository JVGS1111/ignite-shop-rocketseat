import { useShop } from "@/src/hooks/useShop";
import { CartResumeComponent } from "@/src/styles/components/cartResume";

export function CartResume() {
    const { getCartLenght, getAmount } = useShop();
    return (
        <CartResumeComponent>
            <div className="container">
                <span className="quantity_label">Quantidade</span>
                <span className="quantity">{getCartLenght()} itens</span>
            </div>
            <div className="container">
                <span className="value_label">Valor total</span>
                <span className="value">{getAmount()}</span>
            </div>
            <button>
                Finalizar compra
            </button>
        </CartResumeComponent>
    )
}