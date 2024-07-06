import { CartContainer } from "@/src/styles/components/cart";
import Image from "next/image";
import fecharSvg from "../../assets/fechar.svg";
import { ProductList } from "./productList";
import { CartResume } from "./cartResume";

export function Cart() {
    return (
        <CartContainer>
            <header>
                <button className="close_btn">
                    <Image src={fecharSvg} alt="fechar carrinho" />
                </button>
            </header>
            <h1>Sacola de compras</h1>
            <ProductList />
            <CartResume />
        </CartContainer>
    )
}