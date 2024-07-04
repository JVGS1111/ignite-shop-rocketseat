import { styled } from "../styles";

const Button = styled("button", {
  background: "$rocketseat",
  borderRadius: 8,
  border: 0,
  span: {
    fontWeight: "bold"
  }
})

export default function Home() {
  return (
    <Button><span>test</span>Enviar</Button>
  );
}
