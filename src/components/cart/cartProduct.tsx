import { Product } from "@/src/context/shopContext";
import { useShop } from "@/src/hooks/useShop";
import { ProductCartComponent } from "@/src/styles/components/cardProduct";
import Image from "next/image";

interface CartProductProps {
    product: Product
}

export function CartProduct({ product }: CartProductProps) {
    const { removeProduct } = useShop();

    return (
        <ProductCartComponent>
            <div className="product__image_container">
                <img src={product.imageURL} alt="" width={93} />
            </div>
            <div className="product__info_container">
                <h2>{product.name}</h2>
                <span>{product.priceFormatted}</span>
                <button onClick={() => { removeProduct(product.id) }}>Remover</button>
            </div>
        </ProductCartComponent>
    )
}