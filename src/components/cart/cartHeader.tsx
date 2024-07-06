import Image from "next/image";
import fecharSvg from "../../assets/fechar.svg";
import { CardHeaderContainer, CartTitle } from "@/src/styles/components/cartHeader";
import { useShop } from "@/src/hooks/useShop";

export function CartHeader() {
    const { handleOpenCart } = useShop();

    return (
        <>
            <CardHeaderContainer>
                <button className="close_btn" onClick={() => { handleOpenCart(false) }}>
                    <Image src={fecharSvg} alt="fechar carrinho" />
                </button>
            </CardHeaderContainer>
            <CartTitle>Sacola de compras</CartTitle>
        </>
    )
}