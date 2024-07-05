import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/products";
import { useRouter } from "next/router"

export default function Products() {
    const { query } = useRouter();
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camisa X</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at obcaecati itaque suscipit sint nobis enim dolore consectetur eligendi deserunt. Illum quod repudiandae ducimus consequuntur culpa numquam facere modi tempora!</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}