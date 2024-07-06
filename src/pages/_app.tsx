import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import bagSvg from "../assets/bag.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { ShopContextProvider } from "../context/shopContext";
import { Cart } from "../components/cart/cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ShopContextProvider>
      <Cart />
      <Container>
        <Header>
          <Image src={logoImg} alt="ignite shop" />
          <button data-count={3}>
            <Image src={bagSvg} alt="carrinho" />
          </button>
        </Header>
        <Component {...pageProps} />
      </Container>
    </ShopContextProvider>
  )
}
