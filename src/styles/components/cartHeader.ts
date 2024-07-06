import { styled } from "..";

export const CardHeaderContainer = styled("header", {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "24px",

    ".close_btn": {
        background: "transparent",
        border: "none",
        height: 44,
        width: 44,
        cursor: "pointer"
    }
});

export const CartTitle = styled("h1", {
    color: "$white",
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "32px"
})