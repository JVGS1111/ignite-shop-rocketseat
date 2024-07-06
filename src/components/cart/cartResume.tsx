import { CartResumeComponent } from "@/src/styles/components/cartResume";

export function CartResume() {
    return (
        <CartResumeComponent>
            <div className="container">
                <span className="quantity_label">Quantidade</span>
                <span className="quantity">3 itens</span>
            </div>
            <div className="container">
                <span className="value_label">Valor total</span>
                <span className="value">R$ 270,00</span>
            </div>
            <button>
                Finalizar compra
            </button>
        </CartResumeComponent>
    )
}