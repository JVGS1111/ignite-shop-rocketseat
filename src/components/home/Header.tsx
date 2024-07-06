import { Header } from "@/src/styles/pages/app"
import Image from "next/image"
import logoImg from "../../assets/logo.svg";
import bagSvg from "../../assets/bag.svg";
import { useShop } from "@/src/hooks/useShop";

export function HeaderComponent() {
  const { handleOpenCart } = useShop();

  return (
    <Header >
      <Image src={logoImg} alt="ignite shop" />
      <button data-count={3} onClick={() => {
        handleOpenCart(true)
      }}>
        <Image src={bagSvg} alt="carrinho" />
      </button>
    </Header>
  )
}