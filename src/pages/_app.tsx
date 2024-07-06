import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { ShopContextProvider } from "../context/shopContext";
import { Cart } from "../components/cart/cart";
import { HeaderComponent } from "../components/home/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ShopContextProvider>
      <Container>
        <Cart />
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </ShopContextProvider>

  )
}
