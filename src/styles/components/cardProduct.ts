import { styled } from "..";

export const ProductCartComponent = styled("article", {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "1.25rem",

    ".product__image_container": {
        width: 101,
        height: 93,
        background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        borderRadius: 8
    },

    ".product__info_container": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        h2: {
            fontWeight: "normal",
            fontSize: "1.125rem",
            marginBottom: 8,
            color: "$gray300"
        },

        span: {
            fontSize: "1.125rem",
            fontWeight: "bold"
        },

        button: {
            cursor: "pointer",
            marginTop: "auto",
            color: "$green500",
            fontWeight: "bold",
            fontSize: "1rem",
            background: "transparent",
            border: "none"
        }
    }
});