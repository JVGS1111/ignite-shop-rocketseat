import { ProductCartComponent } from "@/src/styles/components/cardProduct";

export function CartProduct() {

    return (
        <ProductCartComponent >
            <div className="product__image_container">

            </div>
            <div className="product__info_container">
                <h2>Camiseta Beyond the Limits</h2>
                <span>R$ 79,90</span>
                <button>Remover</button>
            </div>
        </ProductCartComponent>
    )
}